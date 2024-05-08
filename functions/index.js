const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.paymentCallback = functions.https.onRequest(async (req, res) => {
  try {
    // Verificar si la solicitud es de tipo POST
    if (req.method !== "POST") {
      return res.status(405).send({error: "Método no permitido"});
    }

    // Verificar si req.body está definido
    if (!req.body) {
      return res.status(400).send({error: "Cuerpo de la solicitud vacío"});
    }

    // Importar la clase Order usando importación dinámica
    const {Order} = require("../src/infraestructure/api/orders");

    // Obtener la información del pago del cuerpo de la solicitud
    const paymentInfo = req.body;
    console.log("Pago recibido:", paymentInfo);

    // Extraer orderId del pago recibido
    const {orderId} = paymentInfo;

    // Verificar si orderId está definido
    if (!orderId) {
      return res.status(400).send({error: "orderId no especificado"});
    }   

    // Actualizar el estado del pedido en la base de datos
    await admin.firestore().collection("orders").doc(orderId).update({
      paymentStatus: "paid", // Cambiar el nombre del campo de estado del pago
      paymentDetails: paymentInfo,
    });

    // Obtener el pedido desde Firestore
    const orderDoc = await admin.firestore().collection("orders").doc(orderId).get();
    if (!orderDoc.exists) {
      return res.status(404).send({error: "Pedido no encontrado"});
    }
    const orderData = orderDoc.data();

    // Crear una instancia de la clase Order con los datos del pedido
    const order = new Order(
        orderDoc.id,
        orderData.userEmail,
        orderData.products,
        orderData.deliveryAddress,
        orderData.paymentStatus, // Usar el nuevo nombre del campo
        orderData.totalPrice,
        orderData.paymentMethod,
    );

    // Enviar respuesta de éxito
    res.status(200).send({message: "Pago procesado correctamente", order});
  } catch (error) {
    // Manejar errores
    console.error("Error al procesar el pago:", error);
    res.status(500).send({error: "Error interno del servidor"});
  }
});
