import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderById, updateOrder } from '../../../infraestructure/api/orders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner'; // Importar el spinner deseado
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
    try {
      await updateOrder(orderId, { status: 'En Camino' });
      toast.success('Pedido confirmado y en camino');
      navigate(`/seguimientopedido/${orderId}`);
    } catch (error) {
      console.error('Error al confirmar el pedido:', error);
      toast.error('Error al confirmar el pedido.');
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

  if (isLoading) {
    return (
      <div className="loading-container">
        <TailSpin color="#00BFFF" height={50} width={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        Ha ocurrido un error: {error}
      </div>
    );
  }

  return (
    <div className="confirmar-pedido">
      <h1>Confirmación de Pedido</h1>
      {order && (
        <div className="order-details">
          <h2>Pedido #{order.id}</h2>
          <p><strong>Estado:</strong> {order.status}</p>
          <p><strong>Dirección de Entrega:</strong> {order.deliveryAddress || 'N/A'}</p>
          <p><strong>Total:</strong> ${order?.totalPrice?.toFixed(2) || 'N/A'}</p>
          <div className="product-list">
            {renderProductList(order.products)}
          </div>
          <button onClick={confirmOrder} className="confirm-button">Seguimiento del pedido</button>
        </div>
      )}
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}
