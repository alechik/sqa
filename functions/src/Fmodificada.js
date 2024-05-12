const functions = require("firebase-functions");
const { db } = require("../firebaseAdmin");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { doc, updateDoc, getDoc } = require("firebase/firestore");

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

// Función para actualizar la factura y enviar la versión modificada por correo electrónico
exports.updateAndSendInvoice = functions.firestore.document("orders/{orderId}").onUpdate(async (change, context) => {
  const orderData = change.after.data();
  const orderId = context.params.orderId;

  // Solo proceder si la orden tiene estado que indica devolución
  if (orderData.status !== "Parcialmentne devuelto") return null;

  const invoiceRef = doc(db, "invoices", orderId);
  const invoiceSnap = await getDoc(invoiceRef);

  if (invoiceSnap.exists()) {
    const invoiceData = invoiceSnap.data();
    
    // Marcar la factura anterior como anulada
    await updateDoc(invoiceRef, {
      status: "Anulado"
    });

    // Crear y guardar la nueva factura
    const newInvoiceRef = doc(db, "invoices", `${orderId}_${new Date().toISOString()}`);
    await updateDoc(newInvoiceRef, {
      ...invoiceData,
      status: "Activo",
      updatedAt: new Date()
    });

    // Generar PDF de la nueva factura
    const pdfPath = path.join(os.tmpdir(), `${orderId}_updated.pdf`);
    const writeStream = fs.createWriteStream(pdfPath);
    const pdfDoc = new PDFDocument();

    pdfDoc.pipe(writeStream);
    pdfDoc.fontSize(22).text("Factura Actualizada", { align: "center" });
    pdfDoc.moveDown();
    pdfDoc.fontSize(12).text(`Fecha de actualización: ${new Date().toLocaleString()}`);
    pdfDoc.moveDown();
    pdfDoc.text(`Total: $${orderData.totalPrice.toFixed(2)}`);

    // Suponiendo que el objeto de productos está bien estructurado
    orderData.products.forEach(product => {
      pdfDoc.moveDown();
      pdfDoc.text(`Producto: ${product.name}, Cantidad: ${product.quantity}, Precio Unitario: $${product.unitPrice.toFixed(2)}`);
    });

    pdfDoc.end();
    await new Promise(resolve => writeStream.on("finish", resolve));

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
      <p>Su factura ha sido actualizada con los últimos cambios en su pedido. Adjuntamos su factura actualizada en formato PDF.</p>
      <p>Si tiene alguna pregunta o necesita más información, no dude en contactarnos.</p>
    </div>
    <div class="footer">
      <p>Gracias por su compra,</p>
      <p><strong>Su E-commerce de Confianza</strong></p>
    </div>
  </div>
</body>
</html>`;

    // Enviar correo con la nueva factura
    const mailOptions = {
        from: "ecommercesantillo@gmail.com",
        to: orderData.userEmail,
        subject: "Su Factura Actualizada",
        html: mailHtml,
        attachments: [{
            filename: `${orderId}_updated.pdf`,
            path: pdfPath,
            contentType: 'application/pdf'
      }]
    };

    await transporter.sendMail(mailOptions);
    console.log("Correo de factura actualizada enviado con éxito.");
  }

  return null;
});
