import React from 'react';
import emailjs from '@emailjs/browser';
import "./qrcompra.css";
import downloadIcon from '../../assets/descargas.png';
import qrImagePath from '../../assets/qr.jpg'

function PagoQR({ total, userEmail }) {

    function downloadImage(qrImagePath) {
        // Crear un elemento <a> temporal
        const tempLink = document.createElement('a');
        tempLink.href = qrImagePath;
        // Asignar el nombre que deseas para el archivo descargado
        tempLink.download = 'CodigoQR.jpg';
        // Simular un clic en el enlace
        document.body.appendChild(tempLink);
        tempLink.click();
        // Limpiar al terminar
        document.body.removeChild(tempLink);
    }

    const onConfirmPayment = () => {
        // Aquí configuras tu service ID y template ID de EmailJS
        const serviceId = 'service_f6wqud7';
        const templateId = 'template_9ilml3q';

        // Parámetros para el template de EmailJS
        const templateParams = {
            total: total, // Asegúrate de incluir el total si lo deseas en el correo
            to_email: userEmail, // Suponiendo que pasas el correo del usuario como prop
            // Añade todos los parámetros que necesites enviar a tu template
        };

        // Envía el correo utilizando EmailJS
        emailjs.send(serviceId, templateId, templateParams)
            .then((response) => {
                console.log('Success!', response.status, response.text);
                // Muestra un mensaje de éxito usando un modal, un toast, etc.
            }, (error) => {
                console.log('Failed...', error);
                // Maneja el error adecuadamente en la UI
            });
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
            <button className="payment-button" onClick={onConfirmPayment}>He realizado el pago</button>
        </div>
    );
}

export default PagoQR;