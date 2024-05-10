const admin = require("firebase-admin");
admin.initializeApp();

const sendOrderConfirmation = require("./src/correos");
const paymentCallback = require("./src/paymentCallback");

exports.sendOrderConfirmation = sendOrderConfirmation;
exports.paymentCallback = paymentCallback;
