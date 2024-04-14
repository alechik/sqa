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
  const { user, cartItems } = location.state || {};  // Utiliza el operador de propagación para evitar undefined

  useEffect(() => {
    if (!user || !cartItems) {
      toast.error('Información del usuario o del carrito no disponible.');
      navigate('/iniciarsesion'); // Redirige al usuario si la información necesaria no está disponible
    }
  }, [user, cartItems, navigate]);

  const downloadImage = (imagePath) => {
    const tempLink = document.createElement('a');
    tempLink.href = imagePath;
    tempLink.download = 'CodigoQR.jpg';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  const onConfirmPayment = async () => {
    if (!user || !cartItems) {
      toast.error('Información del usuario o del carrito no disponible.');
      return;
    }

    try {
      const orderData = {
        userId: user.id,
        products: cartItems,
        deliveryAddress: user.address,
        status: 'Pending',
        totalPrice: cartItems.reduce((acc, item) => acc + item.qty * item.price, 0),
        paymentMethod: 'QR',
      };

      const orderId = await createOrder(orderData);
      if (!orderId) {
        throw new Error("La creación del pedido falló: No se devolvió un ID de pedido.");
      }

      toast.success('Pedido creado con éxito. ID del pedido: ' + orderId);
      navigate('/ruta-de-confirmacion', { state: { orderId } });
    } catch (error) {
      console.error("Error durante el proceso de pago:", error);
      toast.error('Error al procesar el pago: ' + error.message);
    }
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
