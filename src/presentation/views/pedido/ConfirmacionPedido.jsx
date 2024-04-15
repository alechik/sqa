import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderById, updateOrder } from '../../../infraestructure/api/orders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ConfirmacionPedido.css'; // Asegúrate de que el camino de CSS es correcto

export default function ConfirmarPedido() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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
        console.error("Failed to fetch order details:", err);
        setError(err.message);
        toast.error(`Error al obtener los detalles del pedido: ${err.message}`);
        setIsLoading(false);
      });
  }, [orderId]);

  const confirmOrder = async () => {
    console.log('Attempting to confirm order with ID:', orderId);
    try {
      await updateOrder(orderId, { status: 'confirmado' });
      toast.success('Pedido confirmado con éxito!');
      navigate('/seguimiento-del-pedido');
    } catch (error) {
      console.error('Error al confirmar el pedido:', error);
      toast.error('Error al confirmar el pedido.');
      setError('Error al confirmar el pedido: ' + error.message);
    }
  };

  const renderProductList = (products) => {
    return products.map((product, index) => (
      <div key={index} className="product-summary">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <p>{product.name}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio: ${product.unitPrice.toFixed(2)}</p>
        </div>
      </div>
    ));
  };

  if (isLoading) return <div className="loading">Cargando los detalles del pedido...</div>;
  if (error) return <div className="error">Ha ocurrido un error: {error}</div>;

  const handleConfirmOrder = async () => {
    try {
        await updateOrder(orderId, { status: 'confirmado' });
        toast.success('Pedido confirmado con éxito!');
        document.querySelector('.pedido-en-camino').style.display = 'block'; // Muestra el mensaje
        document.querySelector('.confirmar-button').classList.add('confirmar-button-active'); // Activa la animación
        setTimeout(() => navigate('/seguimiento-del-pedido'), 5000); // Espera 5 segundos antes de redirigir
    } catch (error) {
        console.error('Error al confirmar el pedido:', error);
        toast.error('Error al confirmar el pedido.');
        setError('Error al confirmar el pedido: ' + error.message);
    }
};

  return (
    <div className="confirmar-pedido-container">
        <h1>Confirmación de Pedido</h1>
        {order && (
            <div className="confirmar-pedido-details">
                <h2>Pedido #{order.id}</h2>
                <p><strong>Estado:</strong> {order.status}</p>
                <p><strong>Dirección de Entrega:</strong> {order.deliveryAddress || 'N/A'}</p>
                <p><strong>Total:</strong> ${order?.totalPrice?.toFixed(2) || 'N/A'}</p>
                <button onClick={handleConfirmOrder} className="confirmar-button">Confirmar Pedido</button>
                <p className="pedido-en-camino">Tu pedido está en camino!</p>
            </div>
        )}
        <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}
