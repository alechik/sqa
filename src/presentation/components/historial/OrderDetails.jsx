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
import { TailSpin } from 'react-loader-spinner';
import product from '../../../infraestructure/api/product.js';

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
        const unsubscribe = onSnapshot(docRef, async (docSnap) => {
            if (docSnap.exists()) {
                let fetchedOrder = {
                    id: docSnap.id,
                    ...docSnap.data(),
                    date: docSnap.data().createdAt ? format(docSnap.data().createdAt.toDate(), "PPpp") : "No date available",
                    products: docSnap.data().products 
                };
                setOrder(fetchedOrder); 
                await fetchProductDetails(fetchedOrder.products); 
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
            await addReturnRequest(orderId, returnData.productId, returnData.quantity);
            toast.success("Solicitud de devolución enviada.");
            setShowModal(false); // Hide the modal after the operation
        } catch (error) {
            console.error('Error al solicitar la devolución:', error);
            toast.error("Error al solicitar la devolución.");
        }
    };

    const fetchProductDetails = async (products) => {
        const productsWithDetails = await Promise.all(products.map(async (productItem) => {
            const productRef = doc(db, "products", productItem.productId);
            const productSnap = await getDoc(productRef);
            return productSnap.exists() ? {
                ...productItem,
                product_name: productSnap.data().product_name
            } : productItem;
        }));

        // Actualizar solo el array de productos en el estado del pedido manteniendo el resto del pedido intacto
        setOrder(prevOrder => ({
            ...prevOrder,
            products: productsWithDetails
        }));
        setLoading(false);
    };


    const goToTracking = () => {
        navigate(`/seguimientopedido/${orderId}`);
    };

    const openModal = (product) => {
        setReturnData({ productId: product.productId, quantity: 1, maxQuantity: product.quantity });
        setShowModal(true);
    };

    if (loading) {
        return (
            <div className="loading loading-container">
                <TailSpin color="#CD5454" height={50} width={50} />
            </div>
        );
    }
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
        {order.products.map((product, index) => (
            <div key={index} className="product-card">
                <div className="product-info">
                    <div className="product-name">{product.product_name}</div>
                    <div className="product-detailss">
                        <span className="product-quantity">Cantidad: {product.quantity}</span>
                        <span className="product-unit-price">Precio Unitario: ${parseFloat(product.unitPrice).toFixed(2)}</span>
                        <span className="product-total">Total: ${parseFloat(product.unitPrice * product.quantity).toFixed(2)}</span>
                    </div>
                </div>
                <div className="action-buttons">
                    <button className="btn-devolver" onClick={() => openModal(product)}>Solicitar Devolución</button>
                </div>
            </div>
        ))}
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
