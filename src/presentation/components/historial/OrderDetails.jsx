import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../infraestructure/firebase--config';

function OrderDetails() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            const docRef = doc(db, "orders", orderId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setOrder({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log("No such document!");
            }
        };

        fetchOrder();
    }, [orderId]);

    if (!order) return <p>Loading...</p>;

    return (
        <div>
            <h1>Order Details</h1>
            <p>Order ID: {order.id}</p>
            <p>Date: {order.date}</p>
            <p>Status: {order.status}</p>
            <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
            {/* Aquí puedes agregar más detalles si es necesario */}
        </div>
    );
}

export default OrderDetails;
