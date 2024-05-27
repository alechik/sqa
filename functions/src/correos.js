const functions = require("firebase-functions");
const {admin} = require("../firebaseAdmin");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");
const os = require("os");

// Configuración de Nodemailer para enviar correos
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: functions.config().gmail.user,
    pass: functions.config().gmail.pass,
  },
});

exports.sendOrderConfirmation = functions.firestore.document("orders/{orderId}").onUpdate(async (change, context) => {
  const orderData = change.after.data();
  const orderId = context.params.orderId;

  if (orderData.status !== "En Camino") return null;

  const invoiceRef = admin.firestore().doc(`invoice/${orderId}`);
  const invoiceSnap = await invoiceRef.get();
  if (invoiceSnap.exists) {
    console.log("Factura ya generada y enviada.");
    return null;
  }

  const pdfPath = path.join(os.tmpdir(), `${orderId}.pdf`);
  const pdfDoc = new PDFDocument({margin: 50});
  const stream = fs.createWriteStream(pdfPath);
  pdfDoc.pipe(stream);

  pdfDoc.font("Helvetica-Bold").fontSize(25).text("Rojo Polo Paella Inc.", {align: "center"}).fontSize(12).moveDown(2);
  pdfDoc.font("Helvetica").fontSize(12)
      .text(`Facturar a: ${orderData.customerName || "Cliente no especificado"}`, {align: "left"})
      .text(`Fecha de Factura: ${orderData.date ? new Date(orderData.date).toLocaleDateString() : "Fecha no disponible"}`, {align: "right"})
      .moveDown(2);
  pdfDoc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, pdfDoc.y).lineTo(550, pdfDoc.y).stroke().moveDown(0.5);
  pdfDoc.fontSize(12);
  const headers = ["CANT.", "DESCRIPCIÓN", "PRECIO UNIT.", "IMPORTE"];
  const columnWidths = [50, 330, 80, 80];
  let currentX = 50;
  headers.forEach((header, i) => {
    pdfDoc.text(header, currentX, pdfDoc.y, {width: columnWidths[i], align: "center"});
    currentX += columnWidths[i];
  });
  pdfDoc.moveDown(1);
  orderData.products.forEach((product) => {
    currentX = 50;
    const data = [
      product.quantity,
      product.description || "Descripción no disponible",
      `$${parseFloat(product.unitPrice).toFixed(2)}`,
      `$${(product.quantity * parseFloat(product.unitPrice)).toFixed(2)}`,
    ];
    data.forEach((text, i) => {
      pdfDoc.text(text, currentX, pdfDoc.y, {width: columnWidths[i], align: "center"});
      currentX += columnWidths[i];
    });
    pdfDoc.moveDown(1);
  });
  pdfDoc.moveDown(2);
  pdfDoc.fontSize(14).text("Total Factura", 400, pdfDoc.y, {continued: true}).text(`$${parseFloat(orderData.totalPrice).toFixed(2)}`, {align: "right"});
  pdfDoc.end();
  await new Promise((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
  });

  const invoiceData = {
    orderId: orderId,
    userEmail: orderData.userEmail,
    created: new Date(),
    total: orderData.totalPrice,
    status: "Enviado",
    products: orderData.products.map((product) => ({
      name: product.description || "Nombre no disponible",
      quantity: product.quantity,
      unitPrice: product.unitPrice,
    })),
  };
  await admin.firestore().collection("invoice").doc(orderId).set(invoiceData);

  const mailHtml = `<html><head><style>body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333333; } .container { width: 100%; max-width: 600px; margin: auto; background: #ffffff; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); } .header { background: #f8f8f8; padding: 10px 20px; text-align: center; } .content { margin-top: 20px; } .footer { margin-top: 20px; padding-top: 10px; border-top: 1px solid #cccccc; font-size: 12px; text-align: center; }</style></head><body><div class='container'><div class='header'><h1>Confirmación de Pedido</h1></div><div class='content'><p>Estimado cliente,</p><p>Su pedido ha sido procesado y está en camino. Adjuntamos su factura en formato PDF.</p><p>Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos.</p></div><div class='footer'><p>Gracias por su compra,</p><p><strong>Su E-commerce de Confianza</strong></p></div></div></body></html>`;

  const mailOptions = {
    from: "ecommercesantillo@gmail.com",  
    to: orderData.userEmail,
    subject: "Confirmación de Pedido y Factura",
    attachments: [{
      filename: `${orderId}.pdf`,
      path: pdfPath,
      contentType: "application/pdf",
    }],
    html: mailHtml,
  };

  await transporter.sendMail(mailOptions);
  console.log("Correo de factura enviado con éxito.");
});
