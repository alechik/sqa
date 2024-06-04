import React, { useEffect, useState } from 'react';
import Carousel from "../components/Carousel.jsx";
import FlashDeals from "../components/ofertas/FlashDeals.jsx";
import { db } from "../../infraestructure/firebase--config.js";
import { collection, query, orderBy, limit, getDocs, doc, getDoc } from "firebase/firestore";
import "./home.css"

// eslint-disable-next-line react/prop-types
export default function Home({ addtoCart }) {
    const [recentProducts, setRecentProducts] = useState([]);
    const [topRatedProducts, setTopRatedProducts] = useState([]);
    const [bestSellingProducts, setBestSellingProducts] = useState([]);

    // Cargar productos recién agregados
    useEffect(() => {
        const fetchRecentProducts = async () => {
            const q = query(collection(db, "products"), orderBy("date_added", "desc"), limit(10));
            const snapshot = await getDocs(q);
            setRecentProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchRecentProducts();
    }, []);

    // Cargar productos más puntuados
    useEffect(() => {
        const fetchTopRatedProducts = async () => {
            const ratingsRef = collection(db, "product_ratings");
            const ratingsSnapshot = await getDocs(ratingsRef);
            const ratingsMap = {};
            ratingsSnapshot.forEach(doc => {
                const data = doc.data();
                if (ratingsMap[data.productId]) {
                    ratingsMap[data.productId].push(data.rating);
                } else {
                    ratingsMap[data.productId] = [data.rating];
                }
            });

            const topRated = Object.keys(ratingsMap).map(productId => ({
                productId,
                averageRating: ratingsMap[productId].reduce((a, b) => a + b, 0) / ratingsMap[productId].length
            })).sort((a, b) => b.averageRating - a.averageRating).slice(0, 10);

            const products = await Promise.all(topRated.map(async item => {
                const docRef = doc(db, "products", item.productId);
                const productDoc = await getDoc(docRef);
                return { ...productDoc.data(), id: productDoc.id, averageRating: item.averageRating };
            }));

            setTopRatedProducts(products);
        };
        fetchTopRatedProducts();
    }, []);

    // Cargar productos más vendidos
    useEffect(() => {
        const fetchBestSellingProducts = async () => {
            const salesRef = collection(db, "orders");
            const salesSnapshot = await getDocs(salesRef);
            const salesMap = {};
            salesSnapshot.forEach(order => {
                order.data().products.forEach(product => {
                    if (salesMap[product.productId]) {
                        salesMap[product.productId] += product.quantity;
                    } else {
                        salesMap[product.productId] = product.quantity;
                    }
                });
            });

            const sortedSales = Object.keys(salesMap).sort((a, b) => salesMap[b] - salesMap[a]).slice(0, 10);

            const products = await Promise.all(sortedSales.map(async productId => {
                const docRef = doc(db, "products", productId);
                const productDoc = await getDoc(docRef);
                return { ...productDoc.data(), id: productDoc.id, quantitySold: salesMap[productId] };
            }));

            setBestSellingProducts(products);
        };
        fetchBestSellingProducts();
    }, []);
    return <div className='container'>
        <Carousel/>



        <FlashDeals productItems={recentProducts} addtoCart={addtoCart} titulo="Recién Añadidos" />
        <FlashDeals productItems={topRatedProducts} addtoCart={addtoCart} titulo="Más Puntuados" />
        <FlashDeals productItems={bestSellingProducts} addtoCart={addtoCart} titulo="Más Vendidos" />


        <div className="contenedorr">
            <div className="square colegio">
                <span className='span'></span>
                <span className='span'></span>
                <span className='span'></span>
                <div className="containerr">
                    <h2>Entrega Rapida</h2>
                    <h3>+10 Rutas</h3>
                    <p>Tu pedido en la puerta, rápido y seguro</p>
                </div>
            </div>

            <div className="square colegio">
                <span className='span'></span>
                <span className='span'></span>
                <span className='span'></span>
                <div className="containerr">
                    <h2>Innovacion en compras</h2>
                    <h3>+10 Inversionistas</h3>
                    <p>Innovando el comercio digital con apoyo sólido.</p>
                </div>
            </div>

            <div className="square colegio">
                <span className='span'></span>
                <span className='span'></span>
                <span className='span'></span>
                <div className="containerr">
                    <h2 className='h2'>Lider en Bolivia</h2>
                    <h3 className='h3'>N° 1</h3>
                    <p className='p'>El mejor en E-commerce, reconocido y fiable.</p>
                </div>
            </div>
        </div>

    </div>
}
