import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOrderById, updateOrderStatus } from '../../../../infraestructure/api/orders';
import { getUserProfileByEmail } from '../../../../infraestructure/api/user';
import { formatRelative } from 'date-fns';
import { TailSpin } from 'react-loader-spinner';
import './delivery.css';
import whatsappIcon from '../../../assets/whatsapp.png';
import googleMapsIcon from '../../../assets/google-maps.png';
import deliveryIcon from '../../../assets/delivery.png';

function DeliveryDetailsPage() {
    const [order, setOrder] = useState(null);
    const { orderId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchOrder() {
            try {
                const fetchedOrder = await getOrderById(orderId);
                if (fetchedOrder.createdAt && fetchedOrder.userEmail) {
                    const date = new Date(fetchedOrder.createdAt.seconds * 1000);
                    const userDetails = await getUserProfileByEmail(fetchedOrder.userEmail);

                    if (userDetails) {
                        setOrder({
                            ...fetchedOrder,
                            formattedDate: formatRelative(date, new Date()),
                            userName: userDetails.names || 'Nombre no disponible',
                            userPhone: userDetails.numero || 'Número no disponible'
                        });
                    } else {
                        console.error("Detalles del usuario no encontrados para el email:", fetchedOrder.userEmail);
                        setOrder({
                            ...fetchedOrder,
                            formattedDate: formatRelative(date, new Date()),
                            userName: 'Nombre no disponible',
                            userPhone: 'Número no disponible'
                        });
                    }
                } else {
                    setOrder(fetchedOrder);
                }
            } catch (error) {
                console.error("Error fetching order:", error);
            }
        }

        fetchOrder();
    }, [orderId]);

    const handleDelivered = async () => {
        try {
            await updateOrderStatus(orderId, 'Entregado');
            navigate('/');
        } catch (error) {
            console.error("Error updating order status:", error);
        }
    };

    const openGoogleMaps = (address) => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
    };

    const openWhatsApp = (number) => {
        if (!number) {
            console.error("Número de teléfono no disponible");
            return;
        }
        const cleanNumber = number.replace(/[^0-9]/g, '');  // Elimina cualquier carácter no numérico
        const fullNumber = `591${cleanNumber}`;  // Añade el código de país de Bolivia si es necesario
        window.open(`https://wa.me/${fullNumber}`, '_blank');
    };

    if (!order) return <div className="delivery-loader"><TailSpin color="#00BFFF" height={80} width={80} /></div>;

    return (
        <div className="delivery-details-container">
            <h1 className="delivery-details-header">Order Details</h1>
            <div className="delivery-details-content">
                <p className="delivery-order-id"><strong>Order ID:</strong> {order.id}</p>
                <p className="delivery-order-total"><strong>Total:</strong> ${order.totalPrice}</p>
                <p className="delivery-address"><strong>Direccion del cliente: </strong> {order.deliveryAddress}</p>
                <button className="delivery-button google-maps-button" onClick={() => openGoogleMaps(order.deliveryAddress)}>
                    <img src={googleMapsIcon} alt="Google Maps" className="delivery-button-icon" />Ir a Google Maps
                </button>
                <p className="delivery-customer-name"><strong>Nombre del cliente: </strong> {order.userName}</p>
                <p className="delivery-customer-phone"><strong>Celular del cliente: </strong> {order.userPhone}</p>
                <button className="delivery-button whatsapp-button" onClick={() => openWhatsApp(order.userPhone)}>
                    <img src={whatsappIcon} alt="WhatsApp" className="delivery-button-icon" />Contactar por WhatsApp
                </button>
                <p className="delivery-order-date"><strong>Ordenado: </strong> {order.formattedDate}</p>
                <button className="delivery-button delivered-button" onClick={handleDelivered}>
                    <img src={deliveryIcon} alt="Delivered" className="delivery-button-icon" />Marcar como Entregado
                </button>
            </div>
        </div>
    );
}

export default DeliveryDetailsPage;
