import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import $ from 'jquery'; // Importamos jQuery
import qs from 'qs'; // Importamos qs para manejar el formato urlencoded
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import downloadIcon from '../../assets/descargas.png';
import "./qrcompra.css"

function QRCompra() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, cartItems } = location.state || {};
  const [qrImage, setQRImage] = useState('');

  useEffect(() => {
    if (!user || !cartItems) {
      toast.error('Información del usuario o del carrito no disponible.');
      navigate('/iniciarsesion');
    }
  }, [user, cartItems, navigate]);

  const generateQRCode = () => {
    const postData = {
      tcCommerceID: "d029fa3a95e174a19934857f535eb9427d967218a36ea014b70ad704bc6c8d1c",
      tnMoneda: "1",
      tnTelefono: "777777",
      tcCorreo: "correo@example.com",
      tcNombreUsuario: "UsuarioEjemplo",
      tnCiNit: "123465",
      tcNroPago: "Grupo1-10",
      tnMontoClienteEmpresa: 0.1,
      tcUrlCallBack: "",
      tcUrlReturn: "",
      taPedidoDetalle: [
        {
          Serial: 1,
          Producto: "Producto Ejemplo",
          Cantidad: 1,
          Precio: 0.1,
          Descuento: 0,
          Total: 0.1
        }
      ]
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
        // Asegúrate de acceder correctamente a la propiedad de la imagen QR
        const qrBase64 = JSON.parse(data.values.split(';')[1]).qrImage;
        setQRImage(`data:image/png;base64,${qrBase64}`);
        toast.success('Código QR generado con éxito');
      },
      error: (xhr, status, error) => {
        console.error('Error generating QR code:', error);
        toast.error('Error al generar el código QR: ' + error);
      }
    });
  };

  useEffect(() => {
    generateQRCode();
  }, []);

  return (
    <div className="payment-container">
      <h2>Realiza tu pago</h2>
      <div className="qr-image-container">
        {qrImage ? <img src={qrImage} alt="Código QR" className="qr-code-image" /> : <p>Generando QR...</p>}
      </div>
      <div className="qr-actions">
        <button onClick={() => downloadImage(qrImage)} className="download-button">
          <img className='descarga' src={downloadIcon} alt="Descargar QR" />
        </button>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}

export default QRCompra;
