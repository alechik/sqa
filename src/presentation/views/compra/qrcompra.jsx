import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { httpsCallable } from 'firebase/functions';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { functions } from '../../../infraestructure/firebase--config';
import downloadIcon from '../../assets/descargas.png';
import "./qrcompra.css";

function QRCompra() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, cartItems } = location.state || {};
  const [qrUrl, setQrUrl] = useState('');
  const auth = getAuth();

  useEffect(() => {
    if (!user || !cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      toast.error('Información del usuario o del carrito no disponible.');
      navigate('/iniciarsesion');
      return;
    }

    // Validación de los items del carrito
    const validCartItems = cartItems.filter(item => item.qty > 0 && !isNaN(item.qty) && item.unitary_price > 0 && !isNaN(item.unitary_price));

    if (validCartItems.length !== cartItems.length) {
      toast.error("Datos del carrito inválidos.");
      return;
    }

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        currentUser.getIdToken(true).then((token) => {
          const generateQR = httpsCallable(functions, 'generateQRCode', {
            headers: { 'Authorization': `Bearer ${token}` }
          });

          console.log("Datos que se enviarán:", { userId: currentUser.uid, cartItems: validCartItems });

          generateQR({ userId: currentUser.uid, cartItems: validCartItems })
            .then((result) => {
              if (result.data && result.data.qrCodeImage) {
                setQrUrl(result.data.qrCodeImage);
              } else {
                throw new Error("QR code image missing in response");
              }
            })
            .catch((error) => {
              console.error("Error al generar el código QR:", error);
              toast.error("Error al generar el código QR.");
            });
        });
      } else {
        toast.error("Usuario no autenticado. Inicie sesión.");
        navigate('/iniciarsesion');
      }
    });
  }, [user, cartItems, navigate, auth]);

  return (
    <div className="payment-container">
      <h2>Realiza tu pago</h2>
      <div className="qr-image-container">
        {qrUrl ? <img src={qrUrl} alt="Código QR" className="qr-code-image" /> : <p>Cargando QR...</p>}
      </div>
      <div className="qr-actions">
        {qrUrl && (
          <button onClick={() => {
            const link = document.createElement('a');
            link.href = qrUrl;
            link.download = 'CodigoQR.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }} className="download-button">
            <img src={downloadIcon} alt="Descargar QR" className='descarga' />
          </button>
        )}
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}

export default QRCompra;
