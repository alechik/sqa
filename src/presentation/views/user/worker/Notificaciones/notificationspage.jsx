import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPendingOrders, getReturnRequests, handleReturnRequest, acceptOrder } from '../../../../../infraestructure/api/orders';
import { getProductById } from '../../../../../infraestructure/api/product';
import { useAuth } from '../../../../components/context/AuthContext';
import "./NotificationsPage.css";
import { getUserProfileByEmail } from '../../../../../infraestructure/api/user';

function NotificationsPage() {
    const [orders, setOrders] = useState([]);
    const [returnRequests, setReturnRequests] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(false);
    const [loadingReturns, setLoadingReturns] = useState(false);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoadingOrders(true);
            setLoadingReturns(true);
            await fetchOrders();
            await fetchReturnRequests();
            setLoadingOrders(false);
            setLoadingReturns(false);
        };
        fetchData();
    }, []);

    const fetchOrders = async () => {
        try {
            const pendingOrders = await getPendingOrders();
            const formattedOrders = pendingOrders.map(order => ({
                ...order,
                createdAt: new Date(order.createdAt.seconds * 1000).toLocaleString()
            }));
            setOrders(formattedOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        } catch (error) {
            console.error("Error fetching pending orders:", error);
        }
    };

    const fetchReturnRequests = async () => {
        try {
            const data = await getReturnRequests();
            const requestsWithProductDetails = await Promise.all(data.map(async request => {
                const productDetails = await getProductById(request.productId);
                const userDetails = await getUserProfileByEmail(request.userEmail);
                return {
                    ...request,
                    productName: productDetails.product_name,
                    productDescription: productDetails.description,
                    productImage: productDetails.pictures,
                    userPhone: userDetails.numero,
                    requestedAt: new Date(request.requestedAt.seconds * 1000).toLocaleString()
                };
            }));
            setReturnRequests(requestsWithProductDetails);
        } catch (error) {
            console.error("Error fetching return requests:", error);
        }
    };


    const handleAccept = async (orderId) => {
        try {
            const result = await acceptOrder(orderId, currentUser.uid);
            if (result.success) {
                fetchOrders(); // Refrescar las órdenes después de aceptar una
                navigate(`/delivery/${orderId}`);
            }
        } catch (error) {
            console.error("Error accepting order:", error);
        }
    };

    const handleReturnRequestAction = async (orderId, productId, action) => {
        try {
            const result = await handleReturnRequest(orderId, productId, action, currentUser.uid);
            if (result.success) {
                fetchReturnRequests(); // Refrescar las solicitudes de devolución
            }
        } catch (error) {
            console.error(`Error handling return request (${action}):`, error);
        }
    };

    if (loadingOrders || loadingReturns) {
        return <div className="loading">Loading...</div>;
    }

    const openMap = (address) => {
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(mapUrl, '_blank');
    };

    const openWhatsApp = (number) => {
        if (!number) {
            console.error("Número de teléfono no disponible");
            return;
        }
        const cleanNumber = number.replace(/[^0-9]/g, '');
        const fullNumber = `591${cleanNumber}`;
        window.open(`https://wa.me/${fullNumber}`, '_blank');
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
                                        <p className="order-time"><strong>Tiempo Ordenado:</strong> {new Date(order.createdAt.seconds * 1000).toLocaleString()}</p>
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
                                        <p className="return-id"><strong>Orden ID:</strong> {request.id}</p>
                                        <p className="return-total"><strong>Total:</strong> ${request.totalPrice.toFixed(2)}</p>
                                        <p className="return-time"><strong>Requested At:</strong> {new Date(request.requestedAt).toLocaleString()}</p>
                                        <p className="return-email"><strong>Email:</strong> {request.userEmail}</p>
                                        <p className="return-address"><strong>Address:</strong> {request.deliveryAddress}</p>
                                        <div className="return-products">
                                            <h3 className="products-title">Products to Return</h3>
                                            <ul className="products-list">
                                                <li className="product-item">
                                                    <img src={request.productImage} alt={request.productName} className="product-image" />

                                                    <p className="product-name"><strong>{request.productName}</strong></p>
                                                    <p className="product-description">{request.productDescription}</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="botoness">
                                            <button className="map-button" onClick={() => openMap(request.deliveryAddress)}>View on Map</button>
                                            <button className="whatsapp-button" onClick={() => openWhatsApp(request.userPhone)}>Contact on WhatsApp</button>
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
