const functions = require("firebase-functions");
const {admin} = require("../firebaseAdmin.js");
const nodemailer = require("nodemailer");

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

// Función para manejar la anulación de la factura y enviar correo de devolución completa
exports.handleFullRefund = functions.firestore.document("orders/{orderId}").onUpdate(async (change, context) => {
  const orderData = change.after.data();
  const orderId = context.params.orderId;

  // Proceder solo si el pedido tiene estado "Devuelto"
  if (orderData.status !== "Devuelto") return null;

  const invoiceRef = admin.firestore().doc(`invoices/${orderId}`);
  const invoiceSnap = await invoiceRef.get();

  if (invoiceSnap.exists) {
    // Marcar la factura como anulada
    await invoiceRef.update({
      status: "Anulado",
    });

    // Diseño HTML del correo para la devolución completa
    const mailHtml = `
<html>
<head>
  <style>
    body { font-family: 'Arial', sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4; color: #333; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
    .header { background-color: #ff4757; color: #ffffff; padding: 10px 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; }
    .content { padding: 20px; text-align: center; line-height: 1.6; }
    .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Devolución Procesada</h1>
    </div>
    <div class="content">
      <p>Estimado cliente,</p>
      <p>Le confirmamos que su devolución completa ha sido procesada exitosamente. Su factura ha sido anulada.</p>
      <p>Si tiene alguna pregunta o necesita más información, por favor no dude en contactarnos. Estamos aquí para ayudarle.</p>
    </div>
    <div class="footer">
      <p>Gracias por su comprensión,</p>
      <p><strong>Su E-commerce de Confianza</strong></p>
    </div>
  </div>
</body>
</html>`;

    // Enviar correo con la confirmación de devolución completa
    const mailOptions = {
      from: "ecommercesantillo@gmail.com",
      to: orderData.userEmail,
      subject: "Confirmación de Devolución Completa",
      html: mailHtml,
    };

    await transporter.sendMail(mailOptions);
    console.log("Correo de devolución completa enviado con éxito.");
  }

  return null;
});
