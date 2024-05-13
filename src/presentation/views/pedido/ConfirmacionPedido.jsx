import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderById } from '../../../infraestructure/api/orders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import './ConfirmacionPedido.css';

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
  }, [orderId, navigate]);

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
      <div className="loading loading-container">
        <TailSpin color="#00BFFF" height={50} width={50} />
        <p>Por favor, espera mientras obtenemos los detalles del pedido...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error error-container">
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
        </div>
      )}
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}
