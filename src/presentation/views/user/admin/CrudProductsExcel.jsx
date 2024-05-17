import React, { useState, useEffect } from 'react';
import {
    readExcelFile,
    calculatePMP,
    calculatePPP, // Importamos la nueva función
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
            gananciaLote: calculatePMP(product.unitary_price, product.stock, product.costo_lote),
            ppp: calculatePPP(product.costo_lote, product.stock) // Calculamos el PPP
        }));
        setProducts(processedProducts);
        setLoading(false);
        setProcessed(false);
    };

    const handleProcess = async () => {
        setLoading(true);
        const existingProducts = await getProducts(); // Retrieve all current products
        const productMap = new Map(existingProducts.map(p => [p.product_name.toLowerCase(), p]));

        const batch = writeBatch(db);
        const profitsToAdd = []; // To store profit data for adding later

        for (const product of products) {
            const existingProduct = productMap.get(product.product_name.toLowerCase());
            let productId;
            if (existingProduct) {
                // Product exists, update the stock
                const productRef = doc(db, "products", existingProduct.id);
                batch.update(productRef, {
                    stock: existingProduct.stock + product.stock  // Add the new stock to the existing stock
                });
                productId = existingProduct.id;  // Use the existing ID for the profit data
            } else {
                // Product does not exist, create a new one
                const newDocRef = doc(collection(db, "products"));
                batch.set(newDocRef, product);
                productId = newDocRef.id;  // Use the new ID for the profit data
            }
            console.log("PPP to be saved:", product.ppp);
            // Prepare profit data per lot using the product ID
            profitsToAdd.push({
                cost: product.costo_lote,
                id_product: productId,
                profit: calculatePMP(product.unitary_price, product.stock, product.costo_lote),
                total_sell: product.unitary_price * product.stock,
                time: new Date(),
                ppp: product.ppp // Ensure to include the PPP
            });
        }

        try {
            await batch.commit();  // Execute all the operations in the batch for products

            // Add the profit lots after updating/creating products
            for (const profit of profitsToAdd) {
                await addProfitPerLot(profit);  // Ensure this function handles the PPP
            }

            setProcessed(true);
            alert('Productos procesados y actualizados correctamente, ganancias por lote añadidas.');
        } catch (error) {
            console.error("Error processing products:", error);
            alert('Error al procesar los productos. Por favor, revise los detalles del error.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='crud-product-excel'>
            <input type="file" onChange={handleFileChange} accept=".xlsx, .xls"/>
            {loading && <p>Cargando...</p>}
            {!loading && products.length > 0 && (
                <div>
                    <h3>Productos a añadir</h3>
                    <ul>
                        {products.map((product, index) => (
                            <li key={index}>
                                {product.product_name} - Ganancia por lote: {product.gananciaLote} - PPP: {product.ppp}
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
                        <th>PPP</th>
                        {/* Añadimos la columna para el PPP */}
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
                            <td>{profit.ppp || 'N/A'}</td>
                            {/* Mostramos el PPP */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}
    export default CrudProductExcel;
