import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../../infraestructure/firebase--config';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './orderdetails.css';
import { addReturnRequest } from "../../../infraestructure/api/orders.js";
import Modal from '../Modal/Modal.jsx';

function OrderDetails() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [returnData, setReturnData] = useState({ productId: '', quantity: 1, maxQuantity: 1 });
    const navigate = useNavigate();

    useEffect(() => {
        const docRef = doc(db, "orders", orderId);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setOrder({
                    id: docSnap.id,
                    ...docSnap.data(),
                    date: docSnap.data().createdAt ? format(docSnap.data().createdAt.toDate(), "PPpp") : "No date available"
                });
                setLoading(false);
            } else {
                setError('No such order found.');
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [orderId]);

    const handleReturnRequest = async () => {
        if (returnData.quantity > returnData.maxQuantity) {
            toast.error("No puedes solicitar la devolución de más productos de los que compraste.");
            return;
        }

        try {
            console.log("Order ID:", orderId);
            console.log("Product ID:", returnData.productId);
            await addReturnRequest(orderId, returnData.productId, returnData.quantity);
            toast.success("Solicitud de devolución enviada.");
            setShowModal(false); // Hide the modal after the operation
        } catch (error) {
            console.error('Error al solicitar la devolución:', error);
            toast.error("Error al solicitar la devolución.");
        }
    };

    const goToTracking = () => {
        navigate(`/seguimientopedido/${orderId}`);
    };

    const openModal = (product) => {
        setReturnData({ productId: product.productId, quantity: 1, maxQuantity: product.quantity });
        setShowModal(true);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!order) return <p>No order data available.</p>;

    return (
        <div className='order-card'>
            <h1>Detalles del Pedido</h1>

            <p><span className="detail-label">Order ID:</span>{order.id}</p>
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
                                <button className="btn-devolver" onClick={() => openModal(product)}>
                                    Solicitar Devolución
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <h2>Solicitar Devolución</h2>
                        <p>¿Estás seguro de que quieres solicitar la devolución de este producto?</p>
                        <input type="number" value={returnData.quantity} onChange={e => setReturnData({ ...returnData, quantity: parseInt(e.target.value, 10) })} min="1" max={returnData.maxQuantity} className="input-quantity" />
                        <button onClick={handleReturnRequest} className="confirm-button">Confirmar Solicitud</button>
                    </div>
                </Modal>
            )}
            <ToastContainer />
        </div>
    );
}

export default OrderDetails;
