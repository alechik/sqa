
const sendOrderConfirmation = require("./src/correos");
const paymentCallback = require("./src/paymentCallback");
const correollegada = require("./src/correollegada");

exports.sendOrderConfirmation = sendOrderConfirmation;
exports.paymentCallback = paymentCallback;
exports.correollegada = correollegada;
