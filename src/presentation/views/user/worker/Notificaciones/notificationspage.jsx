import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPendingOrders, getReturnRequests, handleReturnRequest, acceptOrder } from '../../../../../infraestructure/api/orders';
import { useAuth } from '../../../../components/context/AuthContext';
import "./NotificationsPage.css";

function NotificationsPage() {
    const [orders, setOrders] = useState([]);
    const [returnRequests, setReturnRequests] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const [loadingReturns, setLoadingReturns] = useState(true);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchOrders() {
            try {
                let pendingOrders = await getPendingOrders();
                pendingOrders = pendingOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setOrders(pendingOrders);
                setLoadingOrders(false);
            } catch (error) {
                console.error("Error fetching pending orders:", error);
                setLoadingOrders(false);
            }
        }

        async function fetchReturnRequests() {
            try {
                let returnRequests = await getReturnRequests();
                returnRequests = returnRequests.sort((a, b) => new Date(b.requestedAt) - new Date(a.requestedAt));
                setReturnRequests(returnRequests);
                setLoadingReturns(false);
            } catch (error) {
                console.error("Error fetching return requests:", error);
                setLoadingReturns(false);
            }
        }

        fetchOrders();
        fetchReturnRequests();
    }, []);

    const handleAccept = async (orderId) => {
        try {
            await acceptOrder(orderId, currentUser.uid);
            setOrders(orders.filter(order => order.id !== orderId));
            navigate(`/delivery/${orderId}`);
        } catch (error) {
            console.error("Error accepting order:", error);
        }
    };

    const handleReturnRequestAction = async (orderId, productId, action) => {
        try {
            await handleReturnRequest(orderId, productId, action, currentUser.uid);
            setReturnRequests(returnRequests.filter(request => !(request.orderId === orderId && request.productId === productId)));
        } catch (error) {
            console.error(`Error ${action === 'accept' ? 'accepting' : 'rejecting'} return request:`, error);
        }
    };

    const openMap = (address) => {
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(mapUrl, '_blank');
    };

    const openWhatsApp = (phoneNumber) => {
        const waUrl = `https://wa.me/${phoneNumber}`;
        window.open(waUrl, '_blank');
    };

    if (loadingOrders || loadingReturns) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="notifications-page">
            <h1 className="page-title">Notifications</h1>
            <div className="notifications-container">
                <div className="orders-section">
                    <h2 className="section-title">Pending Orders</h2>
                    {orders.length > 0 ? (
                        <ul className="order-list">
                            {orders.map(order => (
                                <li key={order.id} className="order-item">
                                    <div className="order-details">
                                        <p className="order-id"><strong>Order ID:</strong> {order.id}</p>
                                        <p className="order-total"><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>
                                        <p className="order-time"><strong>Ordered At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                                        <p className="order-address"><strong>Delivery Address:</strong> {order.deliveryAddress}</p>
                                        <button className="accept-button" onClick={() => handleAccept(order.id)}>Accept Order</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : <p className="no-orders">No pending orders.</p>}
                </div>
                <div className="returns-section">
                    <h2 className="section-title">Return Requests</h2>
                    {returnRequests.length > 0 ? (
                        <ul className="return-list">
                            {returnRequests.map(request => (
                                <li key={request.id} className="return-item">
                                    <div className="return-details">
                                        <p className="return-id"><strong>Request ID:</strong> {request.id}</p>
                                        <p className="return-total"><strong>Total:</strong> ${request.totalPrice.toFixed(2)}</p>
                                        <p className="return-time"><strong>Requested At:</strong> {new Date(request.requestedAt).toLocaleString()}</p>
                                        <p className="return-email"><strong>Customer Email:</strong> {request.userEmail}</p>
                                        <p className="return-address"><strong>Delivery Address:</strong> {request.deliveryAddress}</p>
                                        <div className="return-products">
                                            <h3 className="products-title">Products to Return</h3>
                                            <ul className="products-list">
                                                {request.products.map(product => (
                                                    <li key={product.productId} className="product-item">
                                                        <img src={product.picture} alt={product.name} className="product-image" />
                                                        <p className="product-name"><strong>{product.name}</strong></p>
                                                        <p className="product-description">{product.description}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="botoness">
                                            <button className="map-button" onClick={() => openMap(request.deliveryAddress)}>View on Map</button>
                                            <button className="whatsapp-button" onClick={() => openWhatsApp(request.customerPhone)}>Contact on WhatsApp</button>
                                            <button className="accept-button" onClick={() => handleReturnRequestAction(request.orderId, request.productId, 'accept')}>Accept Return</button>
                                            <button className="reject-button" onClick={() => handleReturnRequestAction(request.orderId, request.productId, 'reject')}>Reject Return</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : <p className="no-returns">No return requests.</p>}
                </div>
            </div>
        </div>
    );
}

export default NotificationsPage;
