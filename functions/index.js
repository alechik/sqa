const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

exports.generateQRCode = functions.https.onCall(async (data, context) => {
  try {
    // Verificar autenticación
    if (!context.auth) {
      throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    // Obtener datos del usuario autenticado
    const userId = context.auth.uid;
    const userDoc = await admin.firestore().collection("users").doc(userId).get();
    const userData = userDoc.data();

    // Validar datos de entrada del usuario
    if (!userData || !userData.ci || !userData.email || !userData.names || !userData.numero) {
      throw new functions.https.HttpsError("invalid-argument", "User data is missing or invalid.");
    }

    // Generar el número de pago basado en el grupo y el número de pedido
    const group = "GRUPO1"; // Reemplazar con el grupo correspondiente
    const orderNumber = 1; // Reemplazar con el número de pedido correspondiente
    const paymentNumber = `${group}-${orderNumber}`;

    // Detalles del pedido (para pruebas)
    const pedidoDetalle = [
      {
        serial: 1,
        producto: "PRODUCTO1",
        cantidad: 2,
        precio: 10,
        descuento: 0,
        total: 2,
      },
    ];

    // Combinar datos del usuario con los datos pasados desde el cliente
    const requestData = {
      tcNroPago: paymentNumber,
      tnMontoClienteEmpresa: 0.1, // Monto de prueba de 0.1 centavo
      tcUrlCallBack: "",
      tcUrlReturn: "",
      taPedidoDetalle: pedidoDetalle,
      tcCommerceID: functions.config().pagofacil.commerceid,
      tnMoneda: "1",
      tnTelefono: userData.numero, // Usar el número de celular del usuario
      tcCorreo: userData.email,
      tcNombreUsuario: userData.names,
      tnCiNit: userData.ci,
    };

    // Realizar llamada al servicio de generación de QR
    const response = await axios.post("https://serviciostigomoney.pagofacil.com.bo/api/servicio/generarqrv2", requestData, {
      headers: {
        "Content-Type": "application/json",
        "TokenService": functions.config().pagofacil.tokenservice,
      },
    });

    // Registro de éxito
    functions.logger.log("QR code generated successfully:", response.data.qrPath);

    return {qrPath: response.data.qrPath};
  } catch (error) {
    // Manejo de errores
    console.error("Error generating QR code:", error);
    throw new functions.https.HttpsError("unknown", "Failed to generate QR code", error);
  }
});
