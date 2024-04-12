import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrderById, updateOrder } from '../../../infraestructure/api/orders'; // Asegúrate de que los importes sean correctos
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ConfirmarPedido({ orderId }) {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getOrderById(orderId)
      .then(orderData => {
        setOrder(orderData);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        toast.error("Error al obtener los detalles del pedido.");
        setIsLoading(false);
      });
  }, [orderId]);

  const confirmOrder = async () => {
    try {
      // Aquí actualizarías el estado del pedido a "confirmado" o un paso similar en tu flujo.
      await updateOrder(orderId, { status: 'confirmado' });
      toast.success('Pedido confirmado con éxito!');
      // Navega al siguiente paso en el flujo después de la confirmación, por ejemplo, al seguimiento del pedido.
      navigate('/seguimiento-del-pedido');
    } catch (error) {
      toast.error('Error al confirmar el pedido.');
      console.error('Error al confirmar el pedido:', error);
    }
  };

  if (isLoading) return <div>Cargando los detalles del pedido...</div>;
  if (error) return <div>Ha ocurrido un error: {error}</div>;

  return (
    <div>
      <h1>Confirmación de Pedido</h1>
      {order && (
        <div>
          <h2>Pedido #{order.id}</h2>
          <p><strong>Estado:</strong> {order.status}</p>
          {/* Asegúrate de convertir la fecha correctamente */}
          <p><strong>Fecha de Pedido:</strong> {new Date(order.createdAt).toLocaleString()}</p>
          <p><strong>Dirección de Entrega:</strong> {order.deliveryAddress}</p>
          <p><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>
          <button onClick={confirmOrder}>Confirmar Pedido</button>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
