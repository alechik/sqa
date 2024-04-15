import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createOrder } from '../../../infraestructure/api/orders';
import downloadIcon from '../../assets/descargas.png';
import qrImagePath from '../../assets/qr.jpg';
import "./qrcompra.css"

function QRCompra() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, cartItems } = location.state || {};

  useEffect(() => {
    if (!user || !cartItems) {
      toast.error('Información del usuario o del carrito no disponible.');
      navigate('/iniciarsesion'); // Redirige al usuario si la información necesaria no está disponible
    }
  }, [user, cartItems, navigate]);
  
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

  const downloadImage = (path) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = 'CodigoQR.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="payment-container">
      <h2>Realiza tu pago</h2>
      <div className="qr-image-container">
        <img src={qrImagePath} alt="Código QR" className="qr-code-image" />
      </div>
      <div className="qr-actions">
        <button onClick={() => downloadImage(qrImagePath)} className="download-button">
          <img src={downloadIcon} alt="Descargar QR" />
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
