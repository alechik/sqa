import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { collection, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../../../infraestructure/firebase--config';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./ordenes.css";
import { format } from 'date-fns';

function Ordenes() {
    const { currentUser } = useAuth();
    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser?.email) {
            const ordersCol = collection(db, "orders");
            const q = query(ordersCol, where("userEmail", "==", currentUser.email), orderBy("createdAt", "desc"), limit(5));
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

    if (loading) return <p>Cargando tus órdenes...</p>;
    if (!ordenes.length) return <p>No tienes órdenes registradas.</p>;

    return (
        <TableContainer component={Paper} className="tusordenes">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="order-number">Nro Orden</TableCell>
                        <TableCell align="right" className="order-date">Fecha</TableCell>
                        <TableCell align="right" className="order-status">Estado</TableCell>
                        <TableCell align="right" className="order-total">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ordenes.map((orden) => (
                        <TableRow key={orden.id} onClick={() => navigate(`/orders/${orden.id}`)} style={{ cursor: 'pointer' }}>
                            <TableCell component="th" scope="row">
                                {orden.id}
                            </TableCell>
                            <TableCell align="right">{orden.date}</TableCell>
                            <TableCell align="right">
                                <span className={`order-dot ${getDotClass(orden.status)}`}></span>
                                {orden.status}
                            </TableCell>
                            <TableCell align="right">
                                ${orden.totalPrice ? orden.totalPrice.toFixed(2) : 'N/A'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function getDotClass(status) {
    switch (status) {
        case 'Entregado':
            return 'greenDot';
        case 'En Camino':
            return 'yellowDot';
        case 'Pendiente':
            return 'redDot';
        case 'Parcialmente devuelto':
            return 'blueDot';
        case 'Devuelto':
            return 'purpleDot';
        default:
            return 'greyDot';
    }
}

export default Ordenes;
