import React, { useEffect, useState } from 'react';
import { getOrdersRecord } from '../../../infraestructure/api/orders';
import * as XLSX from 'xlsx';
import "./sellreport.css";

function SellsReport() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const fetchedOrders = await getOrdersRecord();
            setOrders(fetchedOrders);
        };

        fetchOrders();
    }, []);

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(orders.map(order => ({
            OrderID: order.id,
            UserEmail: order.userEmail,
            TotalPrice: order.totalPrice,
            Status: order.status,
            PaymentMethod: order.paymentMethod,
            Date: order.createdAt,
        })));
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Orders");
        XLSX.writeFile(wb, "sales_report.xlsx");
    };

    return (
        <div className='sells-report-container'>
            <h1>Ventas Reporte</h1>
            <button className="export-btn" onClick={exportToExcel}>Exportar a Excel</button>
            <div className="sells-report-table-wrapper">
                <table className="sells-report-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>User Email</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Payment Method</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.userEmail}</td>
                                <td>{order.totalPrice ? parseFloat(order.totalPrice).toFixed(2) : 'N/A'}</td>
                                <td>{order.status}</td>
                                <td>{order.paymentMethod}</td>
                                <td>{order.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SellsReport;
