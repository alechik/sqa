import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOrderById, updateOrderStatus } from '../../../../../infraestructure/api/orders';
import MapComponent from './MapComponent'; // Componente que muestra el mapa

function DeliveryDetailsPage() {
    const [order, setOrder] = useState(null);
    const { orderId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchOrder() {
            try {
                const fetchedOrder = await getOrderById(orderId);
                setOrder(fetchedOrder);
            } catch (error) {
                console.error("Error fetching order:", error);
            }
        }

        fetchOrder();
    }, [orderId]);

    const handleDelivered = async () => {
        try {
            await updateOrderStatus(orderId, { status: 'Entregado' });
            navigate('/'); // Redirige a la página principal o a donde consideres adecuado
        } catch (error) {
            console.error("Error updating order status:", error);
        }
    };

    if (!order) return <div>Loading...</div>;

    return (
        <div>
            <h1>Order Details</h1>
            <MapComponent destination={order.deliveryAddress} />
            <div>
                <p>Order ID: {order.id}</p>
                <p>Total: {order.totalPrice}</p>
                <p>Delivery Address: {order.deliveryAddress}</p>
                <button onClick={handleDelivered}>Mark as Delivered</button>
            </div>
        </div>
    );
}

export default DeliveryDetailsPage;
