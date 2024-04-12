import React from 'react';

const ConfirmacionPedido = ({ orderDetails }) => {
    return (
        <div className="confirmacion-pedido">
            <h1>¡Gracias por tu compra!</h1>
            <p>Hemos recibido tu pedido y estamos trabajando para enviarlo lo más pronto posible.</p>

            <div className="detalles-pedido">
                <h2>Detalles del Pedido:</h2>
                <p>Número de Pedido: {orderDetails.orderId}</p>
                <ul>
                    {orderDetails.items.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.quantity} x ${item.price}
                        </li>
                    ))}
                </ul>
                <p>Total: ${orderDetails.total}</p>
            </div>

            <div className="envio">
                <h2>Dirección de Envío:</h2>
                <p>{orderDetails.shippingAddress}</p>
            </div>

            <p>Un correo electrónico de confirmación ha sido enviado a: {orderDetails.email}</p>
            <p>Si necesitas ayuda con tu pedido, por favor contacta a nuestro servicio al cliente.</p>

          
        </div>
    );
};

export default ConfirmacionPedido;
