import React, { useState, useEffect } from 'react';
import {
    readExcelFile,
    calculatePMP,
    calculatePPP,
    getProductNameById,
    getProducts
} from '../../../../infraestructure/api/product';
import { addProfitPerLot, getAllProfitPerLot } from '../../../../infraestructure/api/profit_per_lot';
import "./crudproductos.css";
import {collection, doc, writeBatch, getDoc, orderBy, query, getDocs} from "firebase/firestore";
import { db } from "../../../../infraestructure/firebase--config.js";

const CrudProductExcel = () => {
    const [fileLoaded, setFileLoaded] = useState(false);
    const [file, setFile] = useState(null);
    const [products, setProducts] = useState([]);
    const [productsFromExcel, setProductsFromExcel] = useState([]);
    const [profits, setProfits] = useState([]);
    const [loading, setLoading] = useState(false);
    const [processed, setProcessed] = useState(false);


    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, [processed]);

    const handleFileChange = async (event) => {
        setLoading(true);
        const file = event.target.files[0];
        if (!file) {
            alert('No file selected or file input is corrupted');
            setLoading(false);
            return;
        }

        try {
            const productsFromExcel = await readExcelFile(file);
            const processedProducts = productsFromExcel.map(product => ({
                ...product,
                gananciaLote: calculatePMP(product.unitary_price, product.stock, product.costo_lote),
                ppp: calculatePPP(product.costo_lote, product.stock),
                quantity: product.stock  // Usando el stock como cantidad
            }));
            setProductsFromExcel(processedProducts);
            setFileLoaded(true);  // Establece que un archivo ha sido cargado y procesado
            setProcessed(false);
        } catch (error) {
            console.error("Error reading file:", error);
            alert('Error al leer el archivo. Asegúrate de que es el formato correcto.');
        }
        setLoading(false);
    };
    const handleProcess = async () => {
        setLoading(true);
        const existingProducts = await getProducts();
        const productMap = new Map(existingProducts.map(p => [p.product_name.toLowerCase(), p]));

        const batch = writeBatch(db);
        const profitsToAdd = [];

        for (const product of productsFromExcel) {
            const existingProduct = productMap.get(product.product_name.toLowerCase());

            if (existingProduct) {
                const productRef = doc(db, "products", existingProduct.id);
                batch.update(productRef, {
                    stock: existingProduct.stock + product.quantity,  // Actualizar stock
                    ppp: product.ppp  // Asumiendo que el PPP se recalcula externamente si es necesario
                });

                product.id = existingProduct.id;  // Asignar el ID existente al producto
            } else {
                const newDocRef = doc(collection(db, "products"));
                batch.set(newDocRef, {
                    ...product,
                    stock: product.quantity
                });
                product.id = newDocRef.id;  // Asignar el nuevo ID al producto
            }

            console.log("PPP to be saved:", product.ppp);
            profitsToAdd.push({
                cost: product.costo_lote,
                quantity: product.quantity,
                id_product: product.id,
                profit: calculatePMP(product.unitary_price, product.stock, product.costo_lote),
                total_sell: product.unitary_price * product.quantity,
                time: new Date(),
                ppp: product.ppp
            });
        }

        try {
            await batch.commit();
            for (const profit of profitsToAdd) {
                await addProfitPerLot(profit);
            }

            setProcessed(true);
            setFileLoaded(false);  // Limpiar productos del Excel
            setProductsFromExcel([]);
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
            {!loading && fileLoaded && productsFromExcel.length > 0 && (
                <div>
                    <h3>Productos a añadir</h3>
                    <ul>
                        {productsFromExcel.map((product, index) => (
                            <li key={index}>
                                {product.product_name} - Ganancia por lote: {product.gananciaLote} - PPP: {product.ppp} - Cantidad: {product.quantity}
                            </li>
                        ))}
                    </ul>
                    {!processed && <button onClick={handleProcess}>Procesar</button>}
                </div>
            )}
            <div>
                <h3>Seguimiento de Productos</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Nombre del Producto</th>
                        <th>Stock</th>
                        <th>PPP</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.product_name}</td>
                            <td>{product.stock}</td>
                            <td>{product.ppp !== null ? product.ppp : 'N/A'}</td>  {/* Mostrar N/A si no tiene PPP */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CrudProductExcel;
