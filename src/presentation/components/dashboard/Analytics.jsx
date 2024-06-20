import React, { useState, useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { sellByProduct } from '../../../infraestructure/api/orders';
import './analiticas.css';

export default function Analytics() {
    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        const fetchTopProducts = async () => {
            try {
                const fetchedProducts = await sellByProduct();
                setTopProducts(fetchedProducts.slice(0, 5)); // Limitar a los 5 productos más vendidos
            } catch (error) {
                console.error('Error fetching product sales data:', error);
            }
        };

        fetchTopProducts();
    }, []);

    const data = topProducts.map(product => ({
        name: product.productName,
        cantidadVendida: product.totalUnits
    }));

    return (
        <div className='analytics'>
            <header>
                <span className='title'>Productos más vendidos</span>
            </header>
            <div className='chart-container'>
                <BarChart className='chart' width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend align='center' />
                    <Bar dataKey="cantidadVendida" fill="#00464e" />
                </BarChart>
            </div>
        </div>
    );
}
