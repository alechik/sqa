import React, { useState, useEffect } from 'react';
import {
    readExcelFile,
    calculatePMP,
    addProductsBatch,
    getProductNameById,
    getProducts
} from '../../../../infraestructure/api/product';
import { addProfitPerLot, getAllProfitPerLot } from '../../../../infraestructure/api/profit_per_lot';
import "./crudproductos.css";
import {collection, doc, writeBatch} from "firebase/firestore";
import {db} from "../../../../infraestructure/firebase--config.js";

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
                try {
                    const productName = await getProductNameById(profit.id_product);
                    return {
                        ...profit,
                        productName,
                        id: profit.id || 'temp-' + Math.random().toString(36).substr(2, 9)
                    };
                } catch (error) {
                    console.error('Error fetching product name:', error);
                    return {
                        ...profit,
                        productName: 'Nombre no encontrado',
                        id: profit.id || 'temp-' + Math.random().toString(36).substr(2, 9)
                    };
                }
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
        const existingProducts = await getProducts(); // Obtén todos los productos actuales
        const productMap = new Map(existingProducts.map(p => [p.product_name.toLowerCase(), p]));

        const batch = writeBatch(db);
        const profitsToAdd = []; // Para almacenar los datos de ganancias para añadir después

        for (const product of products) {
            const existingProduct = productMap.get(product.product_name.toLowerCase());
            let productId;
            if (existingProduct) {
                // Producto existe, actualiza el stock
                const productRef = doc(db, "products", existingProduct.id);
                batch.update(productRef, {
                    stock: existingProduct.stock + product.stock  // Suma el stock existente con el nuevo
                });
                productId = existingProduct.id;  // Usa el ID existente para las ganancias
            } else {
                // Producto no existe, crea uno nuevo
                const newDocRef = doc(collection(db, "products"));
                batch.set(newDocRef, product);
                productId = newDocRef.id;  // Usa el nuevo ID para las ganancias
            }

            // Prepara datos de ganancias por lote usando el ID del producto
            profitsToAdd.push({
                cost: product.costo_lote,
                id_product: productId,
                profit: calculatePMP(product.unitary_price, product.stock, product.costo_lote),
                total_sell: product.unitary_price * product.stock,
                time: new Date()
            });
        }

        await batch.commit();  // Ejecutar todas las operaciones en batch para productos

        // Añadir los lotes de ganancias después de actualizar/crear productos
        for (const profit of profitsToAdd) {
            await addProfitPerLot(profit);
        }

        setLoading(false);
        setProcessed(true);
        alert('Productos procesados y actualizados correctamente, ganancias por lote añadidas.');
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
