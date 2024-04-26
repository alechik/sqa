import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { collection, query, where, orderBy, limit, onSnapshot, getDocs } from 'firebase/firestore';
import { db } from '../../../infraestructure/firebase--config';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./ordenes.css";

function Ordenes() {
    const { currentUser } = useAuth();
    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (currentUser?.email) {
            const ordersCol = collection(db, "orders");
            const q = query(ordersCol, where("userEmail", "==", currentUser.email));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const newOrders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                    .sort((a, b) => b.createdAt - a.createdAt) // Ordena por fecha de creación
                    .slice(0, 5); // Limita a las últimas 5 órdenes
                setOrdenes(newOrders);
                setLoading(false);
            }, error => {
                console.error("Error al escuchar las órdenes: ", error);
                setLoading(false);
            });

            return () => unsubscribe(); // Limpiar el escuchador
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
                        <TableRow key={orden.id}>
                            <TableCell component="th" scope="row">
                                {orden.id}
                            </TableCell>
                            <TableCell align="right">{orden.date}</TableCell>
                            <TableCell align="right">
                                <span className={`order-dot ${orden.status === 'Entregado' ? 'greenDot' : orden.status === 'En Camino' ? 'yellowDot' : 'redDot'}`}></span>
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

export default Ordenes;
