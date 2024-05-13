
const sendOrderConfirmation = require("./src/correos");
const paymentCallback = require("./src/paymentCallback");
const sendDeliveryConfirmation = require("./src/correollegada");
const handleFullRefund = require("./src/Fmodificada.js");

exports.sendOrderConfirmation = sendOrderConfirmation;
exports.paymentCallback = paymentCallback;
exports.sendDeliveryConfirmation = sendDeliveryConfirmation;
exports.handleFullRefund = handleFullRefund;
