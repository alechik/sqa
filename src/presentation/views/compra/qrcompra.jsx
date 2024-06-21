import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import downloadIcon from '../../assets/descargas.png';
import "./qrcompra.css";
import { generateQRCodeAndOrder } from '../../../Controlador/paymentController';
import { checkPaymentStatus } from '../../../infraestructure/api/orders';  // Asumiendo que esta función existe

function QRCompra({setCartItems}) {
  const [qrImage, setQRImage] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const { user, cartItems } = useLocation().state || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.email && cartItems.length > 0) {
      generateQRCodeAndOrder(user, cartItems, setQRImage, setOrderId, {
        onSuccess: (message, newOrderId) => {
          toast.success(message);
          setOrderId(newOrderId);
          // Iniciar la verificación del estado de pago
          startPaymentStatusCheck(newOrderId);
        },
        onError: message => {
          toast.error(message);
        }
      });
    } else {
      toast.error("Faltan datos de usuario o carrito para procesar el pago.");
    }
  }, [user, cartItems, navigate]);

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const startPaymentStatusCheck = (orderId) => {
    const interval = setInterval(async () => {
      const isConfirmed = await checkPaymentStatus(orderId);
      if (isConfirmed) {
        setPaymentConfirmed(true);
        clearInterval(interval);
        clearCart()
        navigate(`/pedidoconfirmado/${orderId}`);
      }
    }, 5000);  // Verificar cada 5 segundos
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
      {paymentConfirmed && <button className="payment-button" onClick={() => navigate(`/pedidoconfirmado/${orderId}`)}>
        He realizado el pago
      </button>}
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}

export default QRCompra;
