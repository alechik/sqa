import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../infraestructure/api/orders';
import { TailSpin } from 'react-loader-spinner';
import './SeguimientoPedido.css';

function SeguimientoPedido() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await getOrderById(orderId);
        setOrder(orderData);
        if (orderData.status === 'Entregado') {
          setOrderComplete(true);
          clearInterval(intervalId);
        }
      } catch (err) {
        setError(`Error loading the order details: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    const intervalId = setInterval(() => {
      if (!orderComplete) {
        fetchOrder();
      }
    }, 5000); // Polling every 10 seconds

    fetchOrder(); // Also call immediately on mount

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [orderId, orderComplete]);

  const renderTimeline = (order) => {
    const statuses = ['En Camino', 'Parcialmente devuelto', 'Devuelto', 'Entregado'];
    const currentIndex = statuses.indexOf(order.status);

    return (
      <div className="timeline">
        {statuses.map((status, index) => (
          <div key={status} className={`timeline-item ${index <= currentIndex ? 'active' : ''}`}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="timeline-time">{status}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="loading loading-container">
        <TailSpin color="#CD5454" height={50} width={50} />
      </div>
    );
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="tracking-container">
      <h1 className="tracking-title">Seguimiento del Pedido #{order && orderId}</h1>
      <h2 className="current-status">Estado actual: {order && order.status}</h2>
      <h3 className="delivery-address">Dirección de Entrega: {order && order.deliveryAddress}</h3>
      {order && renderTimeline(order)}
    </div>
  );
}

export default SeguimientoPedido;
