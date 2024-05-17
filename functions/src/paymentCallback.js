const functions = require("firebase-functions");
const {admin} = require("../firebaseAdmin.js");

exports.paymentCallback = functions.https.onRequest(async (req, res) => {
  console.log("Datos recibidos en la consulta (query):", req.query);

  res.set("Access-Control-Allow-Origin", "*");
  res.set("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({error: 1, status: 0, message: "Método no permitido"});
  }

  const PedidoID = req.query.PedidoID;
  const Fecha = req.query.Fecha;
  const Hora = req.query.Hora;
  const MetodoPago = req.query.MetodoPago;
  const Estado = req.query.Estado;

  if (!PedidoID || !Estado || !Fecha || !Hora || !MetodoPago) {
    return res.status(400).json({
      error: 1,
      status: 0,
      message: "Faltan datos necesarios",
      missing: {
        PedidoID: !PedidoID,
        Fecha: !Fecha,
        Hora: !Hora,
        MetodoPago: !MetodoPago,
        Estado: !Estado,
      },
    });
  }

  try {
    const ordersCollection = admin.firestore().collection("orders");
    const querySnapshot = await ordersCollection.where("PedidoID", "==", PedidoID).get();

    if (querySnapshot.empty) {
      console.log("No se encontró ninguna orden con el PedidoID:", PedidoID);
      return res.status(404).json({error: 1, status: 0, message: "Orden no encontrada"});
    }

    // Asumimos que solo hay un documento que coincide con el PedidoID porque debería ser único
    const orderRef = querySnapshot.docs[0].ref;

    if (Estado === "2") { // Asumimos que '2' indica que el pago fue confirmado
      await orderRef.update({
        statusPay: true,
        paymentDetails: {
          PedidoID,
          Fecha,
          Hora,
          MetodoPago,
          Estado,
        },
      });
      return res.status(200).json({
        error: 0,
        status: 1,
        message: "Pago confirmado desde CallBack",
        values: true,
      });
    } else {
      return res.status(200).json({
        error: 1,
        status: 0,
        message: "Pago no completado",
        values: false,
      });
    }
  } catch (error) {
    console.error(`Error al procesar el pago: ${error}`);
    return res.status(500).json({error: 1, status: 0, message: "Error interno del servidor"});
  }
});
