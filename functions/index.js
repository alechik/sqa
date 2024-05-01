const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
const cors = require("cors")({origin: true});

admin.initializeApp();

/**
 * Handles generating a QR code by making an HTTP request to an external service with the user's cart items.
 * Requires authentication and valid cart item data.
 * @param {Object} req - The HTTP request object, which includes headers and body.
 * @param {Object} res - The HTTP response object used to send responses back to the client.
 */
exports.generateQRCode = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    console.log("Received request headers:", req.headers);
    console.log("Received request body:", req.body);

    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
      console.log("No Authorization token found");
      return res.status(401).send("Authentication required: No token provided.");
    }
    const token = req.headers.authorization.split("Bearer ")[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      console.log("Decoded Token ID:", decodedToken.uid); // Log the UID for the token

      if (!req.body || !Array.isArray(req.body.cartItems) || req.body.cartItems.length === 0) {
        console.log("Invalid request data:", req.body);
        return res.status(400).send("Invalid request: Cart items are missing or invalid.");
      }

      const userData = await fetchUserData(decodedToken.uid);
      if (!userData) {
        console.log("User data not found for UID:", decodedToken.uid);
        return res.status(404).send("User data not found.");
      }

      console.log("User Data:", userData);
      const requestData = buildRequestData(decodedToken.uid, req.body.cartItems, userData);
      console.log("Request Data for PagaFacil:", requestData);

      const response = await axios.post("https://serviciostigomoney.pagofacil.com.bo/api/servicio/generarqrv2", requestData, {
        headers: {
          "Content-Type": "application/json",
          "TokenService": functions.config().pagofacil.token_service,
          "TokenSecret": functions.config().pagofacil.token_secret,
        },
      });

      console.log("Response from PagaFacil:", response.data);
      if (response.data && response.data.qrCodeImage) {
        res.status(200).send({qrImage: response.data.qrCodeImage});
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
 * Builds the request data structure needed to call the external QR generation service.
 * @param {string} uid - User ID derived from the decoded token.
 * @param {Array} cartItems - The list of cart items to include in the QR code request.
 * @param {Object} userData - User data fetched from Firestore.
 * @return {Object} The structured request data for the external service call.
 */
function buildRequestData(uid, cartItems, userData) {
  return {
    tcNroPago: `GRUPO1-${uid}`,
    tnMontoClienteEmpresa: calculateTotal(cartItems),
    tcUrlCallBack: "",
    tcUrlReturn: "",
    taPedidoDetalle: cartItems.map((item, index) => ({
      serial: index + 1,
      producto: item.name,
      cantidad: item.qty,
      precio: item.unitary_price,
      descuento: item.discount || 0,
      total: item.qty * item.unitary_price,
    })),
    tcCommerceID: functions.config().pagofacil.commerce_id,
    tnMoneda: "1",
    tnTelefono: userData.phoneNumber,
    tcCorreo: userData.email,
    tcNombreUsuario: userData.fullName,
    tnCiNit: userData.cinNit,
  };
}


/**
 * Calculates a fixed total price for testing purposes.
 * @param {Array} cartItems - Array of cart items, each containing quantity and unitary price.
 * @return {number} Returns a fixed test price (0.1 Bs) regardless of the cart content.
 */
function calculateTotal(cartItems) {
  console.log("In testing mode, returning fixed price of 0.1 Bs.");
  return 0.1;
}


/**
 * Fetches user data from Firestore using the provided user ID.
 * @param {string} userId - The ID of the user to fetch data for.
 * @return {Promise<Object|null>} A promise that resolves to the user data document if found, otherwise null.
 */
async function fetchUserData(userId) {
  const userRef = admin.firestore().collection("users").doc(userId);
  const doc = await userRef.get();
  if (!doc.exists) {
    console.log("No user data found for user ID:", userId);
    return null;
  }
  return doc.data();
}
