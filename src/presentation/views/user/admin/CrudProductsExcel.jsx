import React, { useState } from 'react';
import { readExcelFile, calculatePMP, addProductsBatch } from '../../../../infraestructure/api/product';
import { addProfitPerLot } from '../../../../infraestructure/api/profit_per_lot'; // Importa la función

const CrudProductExcel = () => {
    const [file, setFile] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [processed, setProcessed] = useState(false);

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
        const ids = await addProductsBatch(products); // Obtiene los IDs de los productos añadidos

        const profits = products.map((product, index) => ({
            cost: product.costo_lote,
            id_product: ids[index], // Utiliza el ID correspondiente
            profit: calculatePMP(product.unitary_price, product.stock, product.costo_lote),
            total_sell: product.unitary_price * product.stock
        }));

        // Añadir cada ganancia por lote a Firestore
        for (const profit of profits) {
            await addProfitPerLot(profit);
        }

        setLoading(false);
        setProcessed(true);
        alert('Productos y ganancias por lote procesados y añadidos correctamente.');
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
        </div>
    );
};

export default CrudProductExcel;
