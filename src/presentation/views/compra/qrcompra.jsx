import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import downloadIcon from '../../assets/descargas.png';
import "./qrcompra.css";
import { generateQRCodeAndOrder } from '../../../Controlador/paymentController';

function QRCompra() {
  const [qrImage, setQRImage] = useState('');
  const [orderId, setOrderId] = useState(null);
  const { user, cartItems } = useLocation().state || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.email && cartItems.length > 0) {
      generateQRCodeAndOrder(user, cartItems, setQRImage, setOrderId, {
        onSuccess: (message, newOrderId) => {
          toast.success(message);
          setOrderId(newOrderId);
        },
        onError: message => {
          toast.error(message);
        }
      });
    } else {
      toast.error("Faltan datos de usuario o carrito para procesar el pago.");
    }
  }, [user, cartItems, navigate]);

  const handleConfirmPayment = () => {
    if (!orderId) {
      toast.error("No se ha generado una orden.");
      return;
    }
    navigate(`/pedidoconfirmado/${orderId}`);
  };

  const downloadImage = () => {
    if (!qrImage) {
      toast.info("No hay un código QR disponible para descargar");
      return;
    }
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
        {qrImage ? <img src={qrImage} alt="Código QR" className="qr-code-image" /> : <p>Espere mientras generamos su QR...</p>}
      </div>
      <div className="qr-actions">
        <button onClick={downloadImage} className="download-button">
          <img className='descarga' src={downloadIcon} alt="Descargar QR" />
        </button>
      </div>
      <button className="payment-button" onClick={handleConfirmPayment}>
        He realizado el pago
      </button>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}

export default QRCompra;
