import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import $ from 'jquery';
import qs from 'qs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getNextPaymentNumber, recordPaymentDetails } from '../../../infraestructure/api/pagos';
import { createOrder } from '../../../infraestructure/api/orders';
import downloadIcon from '../../assets/descargas.png';
import "./qrcompra.css";

function QRCompra() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, cartItems } = location.state || {};
  const [qrImage, setQRImage] = useState('');

  useEffect(() => {
    if (!user || !cartItems || cartItems.length === 0) {
      toast.error('Información del usuario o del carrito no disponible.');
      navigate('/iniciarsesion');
    } else {
      generateQRCode();
    }
  }, [user, cartItems, navigate]);

  const generateQRCode = async () => {
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
      tcUrlCallBack: "",
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

    $.ajax({
      url: 'https://serviciostigomoney.pagofacil.com.bo/api/servicio/generarqrv2',
      method: 'POST',
      headers: headers,
      data: qs.stringify(postData),
      success: (data) => {
        if (data && data.values) {
          try {
            const parts = data.values.split(';');
            if (parts.length > 1) {
              const qrBase64 = JSON.parse(parts[1]).qrImage;
              if (qrBase64) {
                setQRImage(`data:image/png;base64,${qrBase64}`);
                toast.success('Código QR generado con éxito');
              } else {
                toast.error('QR base64 no encontrado en la respuesta.');
              }
            } else {
              toast.error('Formato de respuesta inesperado.');
            }
          } catch (error) {
            console.error('Error al procesar la respuesta del servidor:', error);
            toast.error('Error al procesar la respuesta del servidor.');
          }
        } else {
          console.error('La respuesta del servidor no contiene "values" o es incorrecta:', data);
          toast.error('Error en la respuesta del servidor: ' + (data.messageSistema || 'No se pudo procesar su solicitud.'));
        }
      },
      error: (xhr, status, error) => {
        console.error('Error al generar el código QR:', error);
        toast.error('Error al generar el código QR: ' + error);
      }
    });
  };

  const onConfirmPayment = async () => {
    try {
      if (!user || !cartItems) {
        throw new Error('User or cart items data is missing.');
      }
      const orderId = await createOrder({ items: cartItems, total: calculateTotal(cartItems) }, user);
      toast.success('Pedido creado con éxito. ID del pedido: ' + orderId);
      navigate(`/pedidoconfirmado/${orderId}`);
    } catch (error) {
      console.error("Error during payment process:", error);
      toast.error('Error al procesar el pago: ' + error.message);
    }
  };

  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.qty * item.unitary_price, 0);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = qrImage;
    link.download = 'CodigoQR.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="payment-container">
      <h2>Realiza tu pago</h2>
      <div className="qr-image-container">
        {qrImage ? <img src={qrImage} alt="Código QR" className="qr-code-image" /> : <p>Generando QR...</p>}
      </div>
      <div className="qr-actions">
        <button onClick={downloadImage} className="download-button">
          <img className='descarga'
            src={downloadIcon} alt="Descargar QR" />
        </button>
      </div>
      <button className="payment-button" onClick={onConfirmPayment}>
        He realizado el pago
      </button>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}

export default QRCompra;
