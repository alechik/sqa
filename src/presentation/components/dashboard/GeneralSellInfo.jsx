import React, { useEffect, useState } from 'react';
import { calculateSelledItems, calculateTotalSell, allCanceledOrders } from '../../../infraestructure/api/orders';
import './generalsellinfo.css'

function GeneralSellInfo() {
    const [selledItems, setSelledItems] = useState(0);
    const [totalSales, setTotalSales] = useState(0);
    const [canceledOrders, setCanceledOrders] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const itemsSelled = await calculateSelledItems();
            const total = await calculateTotalSell();
            const canceled = await allCanceledOrders();
            
            setSelledItems(itemsSelled);
            setTotalSales(total);
            setCanceledOrders(canceled);
        };

        fetchData();
    }, []);

    return (
        <div className="general-sell-info">
            <h2>Información General de Ventas</h2>
            <div className="info-item">
                <span>Total Items Vendidos: </span>
                <strong>{selledItems}</strong>
            </div>
            <div className="info-item">
                <span>Total de Ventas ($): </span>
                <strong>{totalSales.toFixed(2)}</strong>
            </div>
            <div className="info-item">
                <span>Órdenes Canceladas/Devueltas: </span>
                <strong>{canceledOrders}</strong>
            </div>
        </div>
    );
}

export default GeneralSellInfo;