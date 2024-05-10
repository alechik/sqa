import React, { useState, useEffect } from 'react';
import { readExcelFile, calculatePMP, addProductsBatch, getProductNameById } from '../../../../infraestructure/api/product';
import { addProfitPerLot, getAllProfitPerLot } from '../../../../infraestructure/api/profit_per_lot';
import "./crudproductos.css";

const CrudProductExcel = () => {
    const [file, setFile] = useState(null);
    const [products, setProducts] = useState([]);
    const [profits, setProfits] = useState([]);
    const [loading, setLoading] = useState(false);
    const [processed, setProcessed] = useState(false);

    useEffect(() => {
        const fetchProfits = async () => {
            const fetchedProfits = await getAllProfitPerLot();
            const profitsWithNames = await Promise.all(fetchedProfits.map(async (profit) => {
                const productName = await getProductNameById(profit.id_product);
                return {
                    ...profit,
                    productName,
                    id: profit.id || 'temp-' + Math.random().toString(36).substr(2, 9)
                };
            }));
            setProfits(profitsWithNames);
        };

        fetchProfits();
    }, [processed]);

    const handleFileChange = async (event) => {
        setLoading(true);
        const file = event.target.files[0];
        const productsFromExcel = await readExcelFile(file);
        const processedProducts = productsFromExcel.map(product => ({
            ...product,
            gananciaLote: calculatePMP(product.unitary_price, product.stock, product.costo_lote)
        }));
        setProducts(processedProducts);
        setLoading(false);
        setProcessed(false);
    };

    const handleProcess = async () => {
        setLoading(true);
        const ids = await addProductsBatch(products);
        const profitsData = products.map((product, index) => ({
            cost: product.costo_lote,
            id_product: ids[index],
            profit: product.gananciaLote,
            total_sell: product.unitary_price * product.stock,
            time: new Date()  // Asegura que la fecha actual se envía
        }));

        for (const profit of profitsData) {
            await addProfitPerLot(profit);
        }

        setProcessed(true);
        alert('Productos y ganancias por lote procesados y añadidos correctamente.');
        setLoading(false);
    };

    return (
        <div className='crud-product-excel'>
            <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" />
            {loading && <p>Cargando...</p>}
            {!loading && products.length > 0 && (
                <div>
                    <h3>Productos a añadir</h3>
                    <ul>
                        {products.map((product, index) => (
                            <li key={index}>
                                {product.product_name} - Ganancia por lote: {product.gananciaLote}
                            </li>
                        ))}
                    </ul>
                    {!processed && <button onClick={handleProcess}>Procesar</button>}
                </div>
            )}
            <div>
                <h3>Registro de Ganancias por Lote</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Lote de:</th>
                            <th>ID Producto</th>
                            <th>Costo del Lote</th>
                            <th>Venta Total</th>
                            <th>Ganancia</th>
                            <th>Fecha/Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {profits.map((profit) => (
                            <tr key={profit.id}>
                                <td>{profit.productName}</td>
                                <td>{profit.id_product}</td>
                                <td>{profit.cost || 'N/A'}</td>
                                <td>{profit.total_sell || 'N/A'}</td>
                                <td>{profit.profit || 'N/A'}</td>
                                <td>{profit.time ? profit.time.toLocaleString() : 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CrudProductExcel;
