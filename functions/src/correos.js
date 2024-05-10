const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");
const os = require("os");

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

  // Crear PDF
  const pdfPath = path.join(os.tmpdir(), `${orderId}.pdf`);
  const pdfDoc = new PDFDocument({ margin: 50 });
  pdfDoc.pipe(fs.createWriteStream(pdfPath));

  // Agregando logo y configurando el título
  pdfDoc.image('../img/iconoW.png', 50, 20, { width: 100 })
    .moveDown(0.5)
    .fontSize(25)
    .font("Helvetica-Bold")
    .text("Factura de Pedido", 150, 50, { align: "center" })
    .fontSize(12)
    .moveDown(2);

  // Información del pedido
  pdfDoc.font("Helvetica")
    .text(`Pedido ID: ${orderId}`, { continued: true, align: "left" })
    .text(`Fecha: ${new Date().toLocaleDateString()}`, { align: "right" })
    .moveDown(1)
    .text(`Total: $${orderData.totalPrice.toFixed(2)}`, { align: "left" })
    .moveDown(1);

  // Encabezado de los productos
  pdfDoc.fillColor("black").fontSize(14)
    .text("Producto", { continued: true, bold: true })
    .text("Cantidad", { continued: true, bold: true, align: "right" })
    .text("Precio Unitario", { continued: true, bold: true, align: "right" })
    .text("Total", { align: "right", bold: true })
    .moveDown(0.5);

  // Listado de productos
  orderData.products.forEach(product => {
    pdfDoc.fontSize(12).font("Helvetica")
      .text(product.name, { continued: true })
      .text(product.quantity, { continued: true, align: "right" })
      .text(`$${product.unitPrice.toFixed(2)}`, { continued: true, align: "right" })
      .text(`$${(product.unitPrice * product.quantity).toFixed(2)}`, { align: "right" })
      .moveDown(0.5);
  });

  pdfDoc.end();
  await new Promise((resolve) => pdfDoc.on("end", resolve));

  // Diseño HTML del correo
  const mailHtml = `
  <html>
  <head>
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { width: 100%; padding: 20px; box-sizing: border-box; }
      .header { background-color: #f8f8f8; padding: 10px 20px; text-align: center; }
      .content { margin-top: 20px; }
      .footer { margin-top: 20px; padding-top: 10px; border-top: 1px solid #ccc; font-size: 12px; text-align: center; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Confirmación de Pedido</h1>
      </div>
      <div class="content">
        <p>Estimado cliente,</p>
        <p>Su pedido ha sido procesado y está en camino. Adjuntamos su factura en formato PDF.</p>
        <p>Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos.</p>
      </div>
      <div class="footer">
        <p>Gracias por su compra,</p>
        <p><strong>Su Empresa de Confianza</strong></p>
      </div>
    </div>
  </body>
  </html>
  `;

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
  return null;
});
