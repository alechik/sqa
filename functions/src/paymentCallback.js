const functions = require("firebase-functions");


exports.paymentCallback = functions.https.onRequest((req, res) => {
  // Verificar si la solicitud es de tipo POST
  if (req.method !== "POST") {
    res.status(405).send({error: "Método no permitido"});
    return;
  }
  
  // Verificar si req.body está definido
  if (!req.body) {
    res.status(400).send({error: "Cuerpo de la solicitud vacío"});
    return;
  }

  // Simplemente confirmar que el pago fue recibido
  console.log("Pago recibido:", req.body);
  res.status(200).send({message: "Pago recibido correctamente"});
});


