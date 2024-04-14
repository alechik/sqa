import React from 'react';
import emailjs from '@emailjs/browser';
import "./qrcompra.css";
import downloadIcon from '../../assets/descargas.png';
import qrImagePath from '../../assets/qr.jpg';
import { createOrder } from '../../../infraestructure/api/orders';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PagoQR({ cart, user }) {

  function downloadImage(imagePath) {
    const tempLink = document.createElement('a');
    tempLink.href = imagePath;
    tempLink.download = 'CodigoQR.jpg';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  }

  const onConfirmPayment = async () => {
    try {
      const orderData = {
        userId: user.id,
        products: cart.items,
        deliveryAddress: user.address,
        status: 'Pending',
        totalPrice: cart.total,
        paymentMethod: 'QR',
      }; 
      console.log("Order ID:", orderId);

      console.log("Order Data:", orderData);
      const orderId = await createOrder(orderData); // Intentar crear el pedido
      console.log("Order ID:", orderId);// Loguear el ID del pedido

      if (!orderId) {
        throw new Error("Order creation failed: No order ID returned.");
      }

      const emailParams = {
        order_id: orderId,
        to_name: user.name,
        total: cart.total,
        fecha: new Date().toLocaleDateString("es-ES"),
        to_email: user.email,
        reply_to: 'ecommercesantillo@gmail.com',
      };

      const serviceId = 'service_f6wqud7';
      const templateId = 'template_9ilml3q';
      const userId = 'XnyTm9fLJd1grL1wx';

      await emailjs.send(serviceId, templateId, emailParams, userId);
      toast.success('Confirmación de pago enviada al correo!', {
        position: "bottom-right"
      });
    } catch (error) {
      console.error("Error during payment processing or email sending:", error);
      toast.error('Error al procesar el pago: ' + error.message, {
        position: "bottom-right"
      });
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
      <ToastContainer />
    </div>
  );
}

export default PagoQR;
