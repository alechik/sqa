const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");
const os = require("os");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ecommercesantillo@gmail.com",
    pass: "ecommmercesantillo@",
  },
});

exports.sendOrderConfirmation = functions.firestore.document("orders/{orderId}").onUpdate(async (change, context) => {
  const orderData = change.after.data();
  const orderId = context.params.orderId;

  if (orderData.status !== "En Camino") return null;

  // Crear PDF
  const pdfPath = path.join(os.tmpdir(), `${orderId}.pdf`);
  const pdfDoc = new PDFDocument({margin: 50});
  pdfDoc.pipe(fs.createWriteStream(pdfPath));

  // Header
  pdfDoc.fontSize(25)
      .font("Helvetica-Bold")
      .text("Factura de Pedido", {
        align: "center",
      });

  // Información de la factura
  pdfDoc.fontSize(12)
      .moveDown(2)
      .font("Helvetica")
      .text(`Pedido ID: ${orderId}`, {
        continued: true,
        align: "left",
      })
      .text(`Fecha: ${new Date().toLocaleDateString()}`, {
        align: "right",
      })
      .moveDown(1)
      .text(`Total: $${orderData.totalPrice.toFixed(2)}`, {
        align: "left",
      })
      .moveDown(1);

  // Encabezados de columna
  pdfDoc.fillColor("#000000")
      .fontSize(14)
      .text("Producto", 50, pdfDoc.y, {continued: true, bold: true})
      .text("Cantidad", 280, pdfDoc.y, {continued: true, bold: true})
      .text("Precio Unitario", 380, pdfDoc.y, {continued: true, bold: true})
      .text("Total", 0, pdfDoc.y, {align: "right", bold: true})
      .moveDown(0.5)
      .strokeColor("#aaaaaa")
      .lineWidth(1)
      .moveTo(50, pdfDoc.y)
      .lineTo(550, pdfDoc.y)
      .stroke()
      .moveDown(0.5);

  // Productos
  orderData.products.forEach((product) => {
    pdfDoc.fontSize(12).font("Helvetica")
        .text(product.name, 50, pdfDoc.y, {continued: true})
        .text(product.quantity, 280, pdfDoc.y, {continued: true})
        .text(`$${product.unitPrice.toFixed(2)}`, 380, pdfDoc.y, {continued: true})
        .text(`$${(product.unitPrice * product.quantity).toFixed(2)}`, 0, pdfDoc.y, {align: "right"})
        .moveDown(0.5);
  });

  pdfDoc.end();
  await new Promise((resolve) => pdfDoc.on("end", resolve));

  // Enviar correo electrónico
  const mailOptions = {
    from: "ecommercesantillo@gmail.com",
    to: orderData.userEmail,
    subject: "Confirmación de Pedido y Factura",
    text: "Su pedido ha sido confirmado y está en camino. Aquí tiene su factura.",
    attachments: [{
      filename: `${orderId}.pdf`,
      path: pdfPath,
      contentType: "application/pdf",
    }],
  };

  await transporter.sendMail(mailOptions);
  return null;
});
