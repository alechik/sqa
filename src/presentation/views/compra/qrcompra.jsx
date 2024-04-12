import React from 'react';
import emailjs from '@emailjs/browser';
import "./qrcompra.css";
import downloadIcon from '../../assets/descargas.png';
import qrImagePath from '../../assets/qr.jpg';
import { placeOrder } from '../../../infraestructure/api/orderService';
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
        // Asumiendo que cart y user contienen todos los datos necesarios
        userId: user.id,
        products: cart.items,
        deliveryAddress: user.address,
        status: 'Pending',
        totalPrice: cart.total,
        paymentMethod: 'QR',
      };

      const orderId = await placeOrder(orderData);

      const emailParams = {
        // Asegúrate de que estos campos coincidan con los parámetros de tu template de EmailJS
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

      emailjs.send(serviceId, templateId, emailParams, userId)
        .then(() => {
          toast.success('Confirmación de pago enviada al correo!', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        })
        .catch((error) => {
          toast.error('Error al enviar confirmación: ' + error.text, {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        });

    } catch (error) {
      toast.error('Error al procesar el pago: ' + error.message, {
        position: toast.POSITION.BOTTOM_RIGHT
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
