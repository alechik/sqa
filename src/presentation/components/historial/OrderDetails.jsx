import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../infraestructure/firebase--config';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './orderdetails.css';
import { updateOrderAfterReturn } from "../../../infraestructure/api/orders.js";
import { addProductStock } from "../../../infraestructure/api/product.js";
import Modal from '../Modal/Modal.jsx';

function OrderDetails() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [returnData, setReturnData] = useState({ productId: '', quantity: 1, maxQuantity: 1 });
    const navigate = useNavigate();

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

    const handleReturn = async () => {
        if (returnData.quantity > returnData.maxQuantity) {
            toast.error("No puedes devolver más productos de los que compraste.");
            return;
        }

        try {
            await addProductStock(returnData.productId, returnData.quantity);
            await updateOrderAfterReturn(orderId, returnData.productId, returnData.quantity);
            fetchOrder();  // Refresh the order to reflect the changes
            setShowModal(false); // Hide the modal after the operation
        } catch (error) {
            console.error('Error handling product return:', error);
            toast.error("Error al procesar la devolución.");
        }
    };

    const openModal = (product) => {
        setReturnData({ productId: product.productId, quantity: 1, maxQuantity: product.quantity });
        setShowModal(true);
    };

    const goToTracking = () => {
        navigate(`/seguimientopedido/${orderId}`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!order) return <p>No order data available.</p>;

    return (
        <div className='order-card'>
            <h1>Detalles del Pedido</h1>

                <p ><span className="detail-label">Order ID:</span>{order.id}</p>

                <p><span className="detail-label">Date:</span>{order.date}</p>
                <p><span className="detail-label">Status:</span>{order.status}</p>
                <p><span className="detail-label">Total Price:</span>${order.totalPrice?.toFixed(2)}</p>
                <p><span className="detail-label">Delivery Address:</span>{order.deliveryAddress}</p>
                <p><span className="detail-label">Payment Method:</span>{order.paymentMethod}</p>

            <button onClick={goToTracking} className="track-button">Seguimiento del Pedido</button>

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
                                <button onClick={() => openModal(product)}>
                                    Devolver
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <h2>Devolver Producto</h2>
                        <p>¿Estás seguro de que quieres devolver este producto?</p>
                        <input type="number" value={returnData.quantity} onChange={e => setReturnData({ ...returnData, quantity: parseInt(e.target.value, 10) })} min="1" max={returnData.maxQuantity} className="input-quantity" />
                        <button onClick={handleReturn} className="confirm-button">Confirmar Devolución</button>
                    </div>
                </Modal>
            )}
            <ToastContainer />
        </div>
    );
}

export default OrderDetails;
