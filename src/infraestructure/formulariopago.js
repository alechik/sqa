import React from 'react';
import PagoQR from './PagoQR'; // Importa el componente PagoQR

function FormularioPago() {
    // Aquí podrías manejar el estado del total y el correo electrónico del usuario
    const total = 100; // Ejemplo de total
    const userEmail = 'usuario@example.com'; // Ejemplo de correo electrónico del usuario

    return (
        <div>
            {/* Renderiza el componente PagoQR y pasa las propiedades necesarias */}
            <PagoQR total={total} userEmail={userEmail} />
        </div>
    );
}

export default FormularioPago;
