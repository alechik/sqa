import React, { createContext, useContext, useState, useCallback } from 'react';
import { getOrderById, updateOrder } from '../../../infraestructure/api/orders';

const OrderContext = createContext();

export function useOrder() {
    return useContext(OrderContext);
}

export const OrderProvider = ({ children, user }) => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchOrder = useCallback(async (orderId) => {
        setLoading(true);
        try {
            const data = await getOrderById(orderId);
            setOrder(data);
        } catch (err) {
            setError(`Error fetching order: ${err.message}`);
            console.error("Error fetching order: ", err);
        } finally {
            setLoading(false);
        }
    }, []);

    const acceptOrder = useCallback(async (orderId) => {
        if (user.typeId !== 2) {  // Asegurarse de que solo trabajadores puedan aceptar órdenes
            setError('Only workers can accept orders.');
            return;
        }
        setLoading(true);
        try {
            await updateOrder(orderId, { status: 'Pendiente', workerId: user.userId });
            await fetchOrder(orderId); // Recargar los datos de la orden actualizada
            setError(''); // Limpia errores previos
        } catch (err) {
            setError(`Error accepting order: ${err.message}`);
            console.error("Error accepting order: ", err);
        } finally {
            setLoading(false);
        }
    }, [user, fetchOrder]);

    const updateOrderStatus = useCallback(async (orderId, status) => {
        if (!['Pendiente', 'En Camino', 'Entregado', 'Parcialmente Devuelto', 'Devuelto'].includes(status)) {
            setError('Invalid order status.');
            return;
        }
        setLoading(true);
        try {
            await updateOrder(orderId, { status });
            await fetchOrder(orderId); // Recargar los datos de la orden actualizada
            setError(''); // Limpia errores previos
        } catch (err) {
            setError(`Error updating order status: ${err.message}`);
            console.error("Error updating order status: ", err);
        } finally {
            setLoading(false);
        }
    }, [fetchOrder]);

    const value = {
        order,
        loading,
        error,
        fetchOrder,
        acceptOrder,
        updateOrderStatus
    };

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    );
};
