import $ from 'jquery';
import qs from 'qs';
import { getNextPaymentNumber } from '../infraestructure/api/pagos';
import { createOrder } from '../infraestructure/api/orders';

export const generateQRCodeAndOrder = async (user, cartItems, setQRImage, setOrderId, callbacks) => {
    if (!user.email || cartItems.length === 0) {
        callbacks.onError("Datos inválidos: Falta el correo del usuario o los artículos del carrito.");
        return;
    }
        try{
        const paymentNumber = await getNextPaymentNumber();
        const postData = {
            tcCommerceID: "d029fa3a95e174a19934857f535eb9427d967218a36ea014b70ad704bc6c8d1c",
            tnMoneda: "1",
            tnTelefono: user.numero || "777777",
            tcCorreo: user.email,
            tcNombreUsuario: user.names || user.displayName,
            tnCiNit: user.ci || "123465",
            tcNroPago: paymentNumber,
            tnMontoClienteEmpresa: 0.01,
            tcUrlCallBack: "https://us-central1-tienda-fa7e8.cloudfunctions.net/paymentCallback",
            tcUrlReturn: "",
            taPedidoDetalle: cartItems.map((item, index) => ({
                Serial: index + 1,
                Producto: item.product_name,
                Cantidad: item.qty,
                Precio: 0.01,
                Descuento: 0,
                Total: 0.01
            }))
        };

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'TokenSecret': '9E7BC239DDC04F83B49FFDA5',
            'TokenService': '51247fae280c20410824977b0781453df59fad5b23bf2a0d14e884482f91e09078dbe5966e0b970ba696ec4caf9aa5661802935f86717c481f1670e63f35d5041c31d7cc6124be82afedc4fe926b806755efe678917468e31593a5f427c79cdf016b686fca0cb58eb145cf524f62088b57c6987b3bb3f30c2082b640d7c52907',
            'CommerceId': 'd029fa3a95e174a19934857f535eb9427d967218a36ea014b70ad704bc6c8d1c'
        };

        
            const data = await $.ajax({
                url: 'https://serviciostigomoney.pagofacil.com.bo/api/servicio/generarqrv2',
                method: 'POST',
                headers: headers,
                data: qs.stringify(postData),
            });

        if (data && data.values) {
            const parts = data.values.split(';');
            if (parts.length > 1) {
                const qrBase64 = JSON.parse(parts[1]).qrImage;
                setQRImage(`data:image/png;base64,${qrBase64}`);
                const orderId = await createOrder(user, cartItems);
                setOrderId(orderId);
                callbacks.onSuccess('Código QR generado con éxito', orderId);
            } else {
                callbacks.onError('QR base64 no encontrado en la respuesta.');
            }
        } else {
            callbacks.onError('La respuesta del servidor no contiene "values" o es incorrecta.');
        }
    } catch (error) {
        callbacks.onError('Error al generar el código QR: ' + error.message);
    }
};