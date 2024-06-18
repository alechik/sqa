import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderById } from '../../../infraestructure/api/orders'; 
import { getProductById } from '../../../infraestructure/api/product'; 
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
    const loadOrder = async () => {
      try {
        setIsLoading(true);
        const orderData = await getOrderById(orderId);
        if (!orderData) {
          throw new Error("El pedido no fue encontrado");
        }
        const productsWithDetails = await Promise.all(
          orderData.products.map(async product => {
            try {
              const productDetails = await getProductById(product.productId);
              return { ...product, ...productDetails };
            } catch (error) {
              console.error("Error al obtener detalles del producto:", error);
              return { ...product, error: error.message }; // Mantiene la información básica y añade un mensaje de error
            }
          })
        );
        setOrder({ ...orderData, products: productsWithDetails });
        if (orderData.status === "En Camino") {
          navigate(`/seguimientopedido/${orderId}`);
        }
      } catch (err) {
        console.error("Failed to fetch order details:", err);
        setError(err.message);
        toast.error(`Error al obtener los detalles del pedido: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadOrder();
    const intervalId = setInterval(loadOrder, 10000);
    return () => clearInterval(intervalId);
  }, [orderId, navigate]);

  const renderProductList = (products) => {
    return products.map((product, index) => (
      <div key={index} className="product-summary">
        <img src={product.pictures || '/default-product-image.png'} alt={product.product_name} className="product-image" />
        <div className="product-info">
          <p>{product.product_name}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio: Bs {parseFloat(product.unitPrice).toFixed(2)}</p>
        </div>
      </div>
    ));
  };

  const goToDetailsPage = () => {
    navigate(`/orders/${orderId}`);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <TailSpin color="#CD5454" height={50} width={50} />
        <p>Por favor, espera mientras obtenemos los detalles del pedido...</p>
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
      <h1>Buscando Delivery</h1>
      {order && (
        <div className="order-details">
          <h2>Pedido: #{orderId}</h2>
          <p><strong>Estado:</strong> {order.status}</p>
          <p><strong>Dirección de Entrega:</strong> {order.deliveryAddress || 'N/A'}</p>
          <p><strong>Total:</strong> Bs {order.totalPrice ? order.totalPrice.toFixed(2) : 'N/A'}</p>
          <div className="product-list">
            {renderProductList(order.products)}
          </div>
          <button onClick={goToDetailsPage} className="details-button">
            ¿Quieres ver más detalles?
          </button>
        </div>
      )}
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}