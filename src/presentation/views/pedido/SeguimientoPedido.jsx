import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { getOrderById, updateOrder } from '../../../infraestructure/api/orders'; // Asegúrate de que la importación es correcta
import './SeguimientoPedido.css';


function SeguimientoPedido() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);
  const googleMapsApiKey = 'AIzaSyDF8jKuen4pA9YJvZWBTLlIPOYpzgJ9i6E';
  const [animationStarted, setAnimationStarted] = useState(false);


  // Definición de la función geocodeAddress
  const geocodeAddress = async (address) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleMapsApiKey}`);
    const data = await response.json();
    if (data.status === 'OK') {
      return data.results[0].geometry.location;
    } else {
      throw new Error('Geocoding failed: ' + data.error_message);
    }
  };
  


   const initMap = async (coordinates) => {
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 13,
      center: coordinates,
    });
    const marker = new window.google.maps.Marker({
      position: coordinates,
      map: map,
      title: 'Delivery Location',
    });

    animateMarker(map, marker, coordinates);
  };

  // Asigna la función initMap a window.initMap
  useEffect(() => {
    window.initMap = initMap;

    return () => {
      window.initMap = null;
    };
  }, []);

  useEffect(() => {
    async function fetchOrderAndPrepareMap() {
      setLoading(true);
      try {
        const orderData = await getOrderById(orderId);
        setOrder(orderData); // Establece los datos del pedido en el estado
        setLoading(false);
        // La función initMap se llamará desde el callback del script de Google Maps si es necesario
      } catch (err) {
        setError(err.message); // Maneja cualquier error que ocurra en el proceso
        setLoading(false);
      }
    }

    if (orderId) {
      fetchOrderAndPrepareMap();
    }
  }, [orderId, googleMapsApiKey]);


  const animateMarker = (map, marker, destination) => {
    if (animationStarted) {
      return; // Evitar iniciar la animación más de una vez.
    }
    setAnimationStarted(true);
    const numSteps = 200; // Para una animación más suave y lenta.
    const timePerStep = 100;
    const startLat = destination.lat - 0.05;
    const startLng = destination.lng - 0.05;
    let step = 0;

    const interval = setInterval(async () => {
      step++;
      const lat = startLat + (destination.lat - startLat) * (step / numSteps);
      const lng = startLng + (destination.lng - startLng) * (step / numSteps);
      marker.setPosition(new window.google.maps.LatLng(lat, lng));
      map.panTo(new window.google.maps.LatLng(lat, lng));

      if (step >= numSteps) {
        clearInterval(interval);
        setOrder((prevOrder) => ({ ...prevOrder, status: 'Entregado' }));
        // Aquí llamamos a updateOrder para actualizar el estado en Firestore
        await updateOrder(orderId, { status: 'Entregado' });
      }
    }, timePerStep);
  };

  useEffect(() => {
    async function fetchOrder() {
      try {
        const orderData = await getOrderById(orderId);
        setOrder(orderData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  useEffect(() => {
    if (order && !window.google?.maps) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMapCallback`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      window.initMapCallback = async () => {
        const geocodedAddress = await geocodeAddress(order.deliveryAddress);
        initMap(geocodedAddress);
      };
    } else if (order && window.google?.maps) {
      // Si google.maps ya está definido, inicializa el mapa directamente
      geocodeAddress(order.deliveryAddress).then(initMap).catch(setError);
    }

    return () => {
      if (window.initMapCallback) {
        window.initMapCallback = null;
      }
    };
  }, [order, googleMapsApiKey]);

  return (
    <div className="tracking-container">
      {loading ? (
        <div className="loader-container">
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </div>
      ) : error ? (
        <p className="error">Error loading the order details: {error}</p>
      ) : (
        <>
          <h1>Seguimiento del Pedido #{order && order.id}</h1>
          <h2>Estado: {order && order.status}</h2>
          <h3>Dirección de Entrega: {order && order.deliveryAddress}</h3>
          <div ref={mapRef} className="map-container" style={{ height: '400px', width: '100%' }} />
        </>
      )}
    </div>
  );
}

export default SeguimientoPedido;
