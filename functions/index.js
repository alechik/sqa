const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
const qs = require("qs");
const cors = require("cors")({origin: true});

/**
 * @description Función para generar un código QR y devolverlo como respuesta.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
exports.generateQRCode = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const token = req.headers.authorization.split("Bearer ")[1];
      const decodedToken = await admin.auth().verifyIdToken(token);

      // Verifica que el token sea válido y contiene un UID
      if (!decodedToken || !decodedToken.uid) {
        return res.status(401).send("Authentication required: Invalid token.");
      }

      // Ahora tienes el UID del usuario
      const userId = decodedToken.uid;

      // Verifica los datos de la solicitud
      if (!req.body || !Array.isArray(req.body.cartItems) || req.body.cartItems.length === 0) {
        return res.status(400).send("Invalid request: Cart items are missing or invalid.");
      }

      // Obtiene los datos del usuario
      const userData = await fetchUserData(userId);
      if (!userData) {
        return res.status(404).send("User data not found.");
      }

      // Obtiene el próximo número de pago
      const nroPago = await getNextNroPago();

      // Construye los datos de la solicitud para generar el código QR
      const requestData = buildRequestData(nroPago, req.body.cartItems, userData);
      const queryString = qs.stringify(requestData, {encode: true, arrayFormat: "brackets"});

      // Realiza la solicitud a la API para generar el código QR
      const apiResponse = await axios.post(`https://serviciostigomoney.pagofacil.com.bo/api/servicio/generarqrv2?${queryString}`, null, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "TokenService": functions.config().pagofacil.token_service,
          "TokenSecret": functions.config().pagofacil.token_secret,
          "CommerceID": functions.config().pagofacil.commerce_id,
        },
      });

      // Si la respuesta contiene la imagen del código QR, envíala en la respuesta
      if (apiResponse.data && apiResponse.data.values && apiResponse.data.values.qrImage) {
        res.status(200).send({qrImage: apiResponse.data.values.qrImage});
      } else {
        throw new Error("QR image data missing in response");
      }
    } catch (error) {
      console.error("Error in request processing:", error);
      res.status(500).send("Internal Server Error: " + error.message);
    }
  });
});

/**
 * @description Obtiene el siguiente número de pago y lo actualiza en la base de datos.
 * @return {Promise<string>} El próximo número de pago.
 */
async function getNextNroPago() {
  const counterRef = admin.firestore().collection("counters").doc("nroPago");
  const doc = await counterRef.get();
  const nextNumber = doc.exists ? doc.data().current + 1 : 6;
  await counterRef.set({current: nextNumber});
  return `Grupo1-${nextNumber}`;
}

/**
 * @description Construye los datos de la solicitud para generar el código QR.
 * @param {string} nroPago - Número de pago.
 * @param {Array<Object>} cartItems - Elementos del carrito.
 * @param {Object} userData - Datos del usuario.
 * @return {Object} Datos de la solicitud.
 */
function buildRequestData(nroPago, cartItems, userData) {
  return {
    tcCommerceID: functions.config().pagofacil.commerce_id,
    tnMoneda: "1",
    tnTelefono: userData.numero,
    tcCorreo: userData.email,
    tcNombreUsuario: userData.names,
    tnCiNit: userData.ci,
    tcNroPago: nroPago,
    tnMontoClienteEmpresa: calculateTotal(cartItems),
    tcUrlCallBack: "",
    tcUrlReturn: "",
    taPedidoDetalle: cartItems.map((item, index) => ({
      Serial: index + 1,
      Producto: item.name,
      Cantidad: item.qty,
      Precio: item.unitary_price,
      Descuento: item.discount || 0,
      Total: item.qty * item.unitary_price,
    })),
  };
}

/**
 * @description Calcula el total de la compra.
 * @param {Array<Object>} cartItems - Elementos del carrito.
 * @return {number} Total de la compra.
 */
function calculateTotal(cartItems) {
  return 0.1; // Assuming a fixed total price for testing
}

/**
 * @description Obtiene los datos del usuario.
 * @param {string} userId - ID del usuario.
 * @return {Promise<Object|null>} Datos del usuario.
 */
async function fetchUserData(userId) {
  const userRef = admin.firestore().collection("users").doc(userId);
  const doc = await userRef.get();
  return doc.exists ? doc.data() : null;
}

