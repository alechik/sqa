const functions = require("firebase-functions");
const {admin} = require("../firebaseAdmin.js");
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

// Función para enviar confirmación de pedido y factura
exports.sendOrderConfirmation = functions.firestore.document("orders/{orderId}").onUpdate(async (change, context) => {
  const orderData = change.after.data();
  const orderId = context.params.orderId;

  if (orderData.status !== "En Camino") return null;

  // Verificar si la factura ya ha sido generada
  const invoiceRef = admin.firestore().doc(`invoice/${orderId}`);
  const invoiceSnap = await invoiceRef.get();
  if (invoiceSnap.exists) {
    console.log("Factura ya generada y enviada.");
    return null; // Salir si la factura ya fue generada
  }

  const pdfPath = path.join(os.tmpdir(), `${orderId}.pdf`);
  const writeStream = fs.createWriteStream(pdfPath);
  const pdfDoc = new PDFDocument();

  pdfDoc.pipe(writeStream);
  // Título
  pdfDoc.fontSize(22).font("Helvetica-Bold").text("Factura de Pedido", {align: "center"}).moveDown(1);
  // Información del pedido
  pdfDoc.fontSize(12).font("Helvetica").text(`Pedido ID: ${orderId}`, {align: "left"}).text(`Fecha: ${new Date().toLocaleDateString()}`, {align: "right"}).moveDown(0.5);
  pdfDoc.text(`Total: $${orderData.totalPrice.toFixed(2)}`, {align: "left"}).moveDown(1);
  // Encabezados de los productos
  pdfDoc.fontSize(12).font("Helvetica-Bold").text("Producto", {continued: true}).text("Cantidad", {continued: true, align: "center"}).text("Precio Unitario", {continued: true, align: "center"}).text("Total", {align: "right"}).moveDown(0.5);
  // Listado de productos
  orderData.products.forEach((product) => {
    pdfDoc.fontSize(10).font("Helvetica").text(product.name, {continued: true}).text(product.quantity.toString(), {continued: true, align: "center"}).text(`$${product.unitPrice.toFixed(2)}`, {continued: true, align: "center"}).text(`$${(product.unitPrice * product.quantity).toFixed(2)}`, {align: "right"}).moveDown(0.5);
  });
  pdfDoc.end();
  await new Promise((resolve) => writeStream.on("finish", resolve));

  // Guardar la factura en Firestore
  const invoiceData = {
    orderId: orderId,
    userEmail: orderData.userEmail,
    created: new Date(),
    total: orderData.totalPrice,
    status: "Enviado",
    products: orderData.products,
  };
  await admin.firestore().collection("invoice").doc(orderId).set(invoiceData);
  console.log("Factura guardada en Firestore");

  // Diseño HTML del correo
  const mailHtml = `<html><head><style>body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; } .container { width: 100%; padding: 20px; box-sizing: border-box; } .header { background-color: #f8f8f8; padding: 10px 20px; text-align: center; } .content { margin-top: 20px; } .footer { margin-top: 20px; padding-top: 10px; border-top: 1px solid #ccc; font-size: 12px; text-align: center; }</style></head><body><div class="container"><div class="header"><h1>Confirmación de Pedido</h1></div><div class="content"><p>Estimado cliente,</p><p>Su pedido ha sido procesado y está en camino. Adjuntamos su factura en formato PDF.</p><p>Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos.</p></div><div class="footer"><p>Gracias por su compra,</p><p><strong>Su E-commerce de Confianza</strong></p></div></div></body></html>`;

  // Configuración del correo electrónico
  const mailOptions = {
    from: "ecommercesantillo@gmail.com",
    to: orderData.userEmail,
    subject: "Confirmación de Pedido y Factura",
    html: mailHtml,
    attachments: [{
      filename: `${orderId}.pdf`,
      path: pdfPath,
      contentType: "application/pdf",
    }],
  };

  await transporter.sendMail(mailOptions);
  console.log("Correo de factura enviado con éxito.");
  return null;
});
