import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../infraestructure/api/orders';
import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import './SeguimientoPedido.css';

function SeguimientoPedido() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [directions, setDirections] = useState(null);

    useEffect(() => {
        setLoading(true);
        getOrderById(orderId)
            .then(data => {
                setOrder(data);
                setLoading(false);
                if (data.location) {
                    calculateRoute(data.location);
                }
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [orderId]);

    const calculateRoute = (destination) => {
        if (!window.google) return; // Ensure Google script has loaded

        const directionsService = new window.google.maps.DirectionsService();
        const origin = { lat: -17.342, lng: -63.252 }; // Simulated origin (update as necessary)

        directionsService.route({
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
                setDirections(result);
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    };

    if (loading) return <p>Cargando detalles del pedido...</p>;
    if (error) return <p>Error al cargar los detalles: {error.message}</p>;

    const containerStyle = {
      width: '100%',
      height: '400px'
    };

    const center = {
      lat: -17.342, // Example center latitude (update as necessary)
      lng: -63.252  // Example center longitude (update as necessary)
    };

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    return (
        <LoadScript googleMapsApiKey={apiKey}>
          <div className="tracking-container">
            <h1>Seguimiento del Pedido #{order?.id}</h1>
            <h2>Estado Actual: {order?.status}</h2>
            <h3>Dirección de Entrega: {order?.deliveryAddress}</h3>
            <div className="timeline">
                {order && order.events ? order.events.map((event, index) => (
                    <div key={index} className="event">
                        <p>{event.date}: {event.description}</p>
                    </div>
                )) : <p>No hay eventos para mostrar.</p>}
            </div>
            {order?.location && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
              >
                <Marker position={order.location} />
                <InfoWindow position={order.location}>
                  <div>
                    <p>Aquí está tu pedido.</p>
                  </div>
                </InfoWindow>
                {directions && <DirectionsRenderer directions={directions} />}
              </GoogleMap>
            )}
          </div>
        </LoadScript>
    );
}

export default SeguimientoPedido;
