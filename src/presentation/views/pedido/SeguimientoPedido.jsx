import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../infraestructure/api/orders';
import { GoogleMap, LoadScriptNext, Marker, InfoWindow, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import { ThreeDots } from 'react-loader-spinner';
import './SeguimientoPedido.css';

function SeguimientoPedido() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [directions, setDirections] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrderById(orderId)
      .then(data => {
        setOrder(data);
        setLoading(false);
        if (data.status === "En camino") {
          simulateDelivery(data.location);
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [orderId]);

  const simulateDelivery = (destination) => {
    const origin = { lat: destination.lat - 0.01, lng: destination.lng - 0.01 }; // Simulated origin close to the destination
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirections(result);
        setTimeout(() => {
          setOrder(prev => ({ ...prev, status: "Confirmado" }));
        }, 180000); // Simulate 3 minutes delivery time
      } else {
        console.error(`Error fetching directions ${result}`);
      }
    });
  };

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScriptNext
      googleMapsApiKey={apiKey}
      onLoad={() => setMapLoaded(true)}
      onUnmount={() => setMapLoaded(false)}
    >
      <div className="tracking-container">
        {loading ? (
          <div className="loader-container">
            <ThreeDots color="#00BFFF" height={80} width={80} />
          </div>
        ) : error ? (
          <p className="error">Error al cargar los detalles: {error.message}</p>
        ) : (
          <>
            <h1 className="order-heading">Seguimiento del Pedido #{order.id}</h1>
            <h2 className="order-status">{order.status}</h2>
            <h3 className="delivery-address">Dirección de Entrega: {order.deliveryAddress}</h3>
            <GoogleMap
              mapContainerStyle={containerStyle}
              mapContainerClassName="order-map"
              center={order.location || { lat: -17.342, lng: -63.252 }}
              zoom={13}
            >
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </>
        )}
      </div>
    </LoadScriptNext>
  );
}

export default SeguimientoPedido;
