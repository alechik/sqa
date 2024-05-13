import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPendingOrders, acceptOrder } from '../../../../../infraestructure/api/orders';
import { useAuth } from '../../../../components/context/AuthContext';
import "./NotificationsPage.css"

function NotificationsPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchOrders() {
            try {
                let pendingOrders = await getPendingOrders();
                // Ordenar las órdenes desde la más reciente a la más antigua
                pendingOrders = pendingOrders.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
                setOrders(pendingOrders);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching pending orders:", error);
                setLoading(false);
            }
        }

        fetchOrders();
    }, []);

    const handleAccept = async (orderId) => {
        try {
            await acceptOrder(orderId, currentUser.uid);
            // Actualizar el estado de la orden en el cliente
            const updatedOrders = orders.map(order => {
                if (order.id === orderId) {
                    return { ...order, status: "En camino" };
                }
                return order;
            });
            setOrders(updatedOrders);
            navigate(`/delivery/${orderId}`);
        } catch (error) {
            console.error("Error accepting order:", error);
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="notifications-page">
            <h1 className="page-title">Pending Orders</h1>
            {orders.length > 0 ? (
                <ul className="order-list">
                    {orders.map(order => (
                        <li key={order.id} className="order-item">
                            <div className="order-details">
                                <p className="order-id"><strong>Order ID:</strong> {order.id}</p>
                                <p className="order-total"><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>
                                <p className="order-time"><strong>Tiempo Ordenado:</strong> {new Date(order.createdAt.seconds * 1000).toLocaleString()}</p>
                                <p className="order-address"><strong>Delivery Address:</strong> {order.deliveryAddress}</p>
                                <button className="accept-button" onClick={() => handleAccept(order.id)}>Accept Order</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : <p className="no-orders">No pending orders.</p>}
        </div>
    );
}

export default NotificationsPage;