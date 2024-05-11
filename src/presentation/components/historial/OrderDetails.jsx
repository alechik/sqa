import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../infraestructure/firebase--config';
import { format } from 'date-fns'; // Asegúrate de tener importado format
import './orderdetails.css'
import {updateOrderAfterReturn} from "../../../infraestructure/api/orders.js";
import {addProductStock} from "../../../infraestructure/api/product.js";

function OrderDetails() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchOrder = async () => {
        try {
            const docRef = doc(db, "orders", orderId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setOrder({
                    id: docSnap.id,
                    ...docSnap.data(),
                    date: docSnap.data().createdAt ? format(docSnap.data().createdAt.toDate(), "PPpp") : "No date available"
                });
            } else {
                setError('No such order found.');
            }
        } catch (e) {
            setError('Failed to fetch order details.');
            console.error("Error fetching order: ", e);
        }
        setLoading(false);
    };

    useEffect(() => {


        fetchOrder();
    }, [orderId]);

    const handleReturn = async (productId, quantity) => {
        try {
            // Añadir el stock devuelto al inventario del producto
            await addProductStock(productId, quantity);

            // Actualizar el pedido después de la devolución
            await updateOrderAfterReturn(orderId, productId, quantity);

            // Actualizar la información en la UI, por ejemplo, re-fetching o ajustando el estado local
            fetchOrder();  // Re-fetch la orden para reflejar los cambios (dependiendo de cómo esté estructurado fetchOrder)
            console.log('Product returned and order updated successfully.');
        } catch (error) {
            console.error('Error handling product return:', error);
            alert('Failed to process the return. Please try again.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!order) return <p>No order data available.</p>;

    return (
        <div className='order-card'>
            <h1>Order Details</h1>
            <div className="order-detail">
                <p> <span className="detail-label"> Order ID:</span>  {order.id}</p>
            </div>
            <div className="order-detail">
                <p> <span className="detail-label">Date :</span> {order.date}</p>
            </div>
            <div className="order-detail">
            <p>    <span className="detail-label"> Status: </span>{order.status}</p>
            </div>
            <div className="order-detail">
                <p> <span className="detail-label"> Total Price: </span> ${order.totalPrice?.toFixed(2)}</p>
            </div>
            <div className="order-detail">
                <p> <span className="detail-label">  Delivery Address: </span> {order.deliveryAddress}</p>
            </div>
            <div className="order-detail">
                <p> <span className="detail-label"> Payment Method: </span> {order.paymentMethod}</p>
            </div>
            <h2>Productos Ordenados:</h2>
            <table>
                <thead>
                <tr>
                    <th>ID de producto</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Total</th>
                    <th>Accion</th>
                </tr>
                </thead>
                <tbody>
                {order.products.map((product, index) => (
                    <tr key={index}>
                        <td>{product.productId}</td>
                        <td>{product.quantity}</td>
                        <td>${product.unitPrice.toFixed(2)}</td>
                        <td>${(product.quantity * product.unitPrice).toFixed(2)}</td>
                        <td>
                            { /* Botón de devolución, condicional basado en la lógica de negocio */ }
                            <button onClick={() => handleReturn(product.productId, product.quantity)}>
                                Devolver
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderDetails;
