import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { collection, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../../../infraestructure/firebase--config';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { TailSpin } from 'react-loader-spinner';
import './ordenes.css';

function Ordenes() {
    const { currentUser } = useAuth();
    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser?.email) {
            const ordersCol = collection(db, "orders");
            const q = query(ordersCol, where("userEmail", "==", currentUser.email), orderBy("createdAt", "desc"), limit(6));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const newOrders = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    date: doc.data().createdAt ? format(doc.data().createdAt.toDate(), "PPpp") : "Sin fecha"
                }));
                setOrdenes(newOrders);
                setLoading(false);
            }, error => {
                console.error("Error al escuchar las órdenes: ", error);
                setLoading(false);
            });

            return () => unsubscribe();
        }
    }, [currentUser]);

    if (loading) {
        return (
            <div className="loading-container">
                <TailSpin color="#CD5454" height={50} width={50} />
            </div>
        );
    }
    if (!ordenes.length) return <p className="orders__empty">No tienes órdenes registradas.</p>;

    return (
        <div className="orders-layout">
            <div className="orders__container">
                <h2 className="orders__title">Mis Órdenes</h2>
                <div className="orders__list">
                    {ordenes.map((orden) => (
                        <div key={orden.id} className={`orders__item orders__item--${orden.status.toLowerCase().replace(/ /g, '-')}`} onClick={() => navigate(`/orders/${orden.id}`)}>
                            <div className="orders__item-header">
                                <span className="orders__id">Nro Orden: {orden.id}</span>
                            </div>
                            <div className="orders__item-body">
                                <p className="orders__date">Fecha: {orden.date}</p>
                                <p className="orders__total">Total: ${orden.totalPrice ? orden.totalPrice.toFixed(2) : 'N/A'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="order-status-legend">
                <h4>Estado de las Órdenes:</h4>
                <div className="status-item"><span className="status-dot entregado"></span> Entregado</div>
                <div className="status-item"><span className="status-dot en-camino"></span> En Camino</div>
                <div className="status-item"><span className="status-dot pendiente"></span> Pendiente</div>
                <div className="status-item"><span className="status-dot parcialmente-devuelto"></span> Parcialmente Devuelto</div>
                <div className="status-item"><span className="status-dot devuelto"></span> Devuelto</div>
            </div>
        </div>
    );
}

export default Ordenes;
