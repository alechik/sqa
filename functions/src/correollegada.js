const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: functions.config().gmail.user,
    pass: functions.config().gmail.pass,
  },
});

exports.sendDeliveryConfirmation = functions.firestore.document("orders/{orderId}").onUpdate(async (change, context) => {
  const orderData = change.after.data();
  const orderId = context.params.orderId;

  // Verifica si el estado del pedido es "Entregado"
  if (orderData.status !== "Entregado") return null;

  // Diseño HTML del correo
  const mailHtml = `
  <html>
  <head>
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px; }
      .container { background-color: #fff; border-radius: 10px; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
      .header { background-color: #007BFF; color: #ffffff; padding: 10px 20px; text-align: center; border-radius: 5px 5px 0 0; }
      .content { margin-top: 20px; text-align: center; }
      .footer { margin-top: 20px; padding-top: 10px; border-top: 1px solid #ccc; font-size: 12px; text-align: center; color: #666; }
      .button { background-color: #28a745; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>¡Pedido Entregado!</h1>
      </div>
      <div class="content">
        <p>Hola, tu pedido con ID <strong>${orderId}</strong> ha sido entregado exitosamente.</p>
        <a href="https://tu-website.com/pedidos/${orderId}" class="button">Ver Detalle del Pedido</a>
      </div>
      <div class="footer">
        <p>Gracias por comprar con nosotros. Esperamos verte pronto.</p>
        <p><strong>Tu Empresa de Confianza</strong></p>
      </div>
    </div>
  </body>
  </html>
  `;

  // Configuración del correo electrónico
  const mailOptions = {
    from: "ecommercesantillo@gmail.com",
    to: orderData.userEmail,
    subject: "¡Tu Pedido ha sido Entregado!",
    html: mailHtml,
  };

  await transporter.sendMail(mailOptions);
  return null;
});
