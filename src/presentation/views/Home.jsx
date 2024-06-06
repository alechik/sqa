import React, { useState, useEffect } from 'react';
import Carousel from "../components/Carousel.jsx";
import FlashDeals from "../components/ofertas/FlashDeals.jsx";
import { fetchRatingsForProduct } from '../../infraestructure/api/product_rating.js';
import { TailSpin } from 'react-loader-spinner';
import './home.css';

export default function Home({ productos, addtoCart }) {
    const [recentProducts, setRecentProducts] = useState([]);
    const [topRatedProducts, setTopRatedProducts] = useState([]);
    const [bestSellingProducts, setBestSellingProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (productos.length > 0) {
            loadData();
        } else {
            setLoading(false);
        }
    }, [productos]);

    const loadData = async () => {
        try {
            await Promise.allSettled([
                fetchRecentProducts(),
                fetchTopRatedProducts(),
                fetchBestSellingProducts()
            ]);
        } catch (err) {
            setError('Error loading data');
        }
        setLoading(false);
    };

    const fetchRecentProducts = async () => {
        setRecentProducts([...productos].sort((a, b) =>
            new Date(b.date_added) - new Date(a.date_added)
        ).slice(0, 10));
    };

    const fetchTopRatedProducts = async () => {
        const productsWithRatings = await Promise.allSettled(
            productos.map(async product => ({
                ...product,
                averageRating: await fetchRatingsForProduct(product.id) || 0
            }))
        );
        setTopRatedProducts(
            productsWithRatings
                .filter(result => result.status === 'fulfilled')
                .map(result => result.value)
                .sort((a, b) => b.averageRating - a.averageRating)
                .slice(0, 10)
        );
    };

    const fetchBestSellingProducts = async () => {
        setBestSellingProducts([...productos].sort((a, b) =>
            parseInt(b.quantitySold) - parseInt(a.quantitySold)
        ).slice(0, 10));
    };

    if (loading) {
        return (
            <div className="loading-container">
                <TailSpin color="#CD5454" height={50} width={50} />
            </div>
        );
    }
    if (error) return <div>Error: {error}</div>;


    return (
        <div className='container'>
            <Carousel />

            <FlashDeals productItems={recentProducts} productos={recentProducts} addtoCart={addtoCart} titulo="Recién Añadidos" />
            <FlashDeals productItems={topRatedProducts} productos={topRatedProducts} addtoCart={addtoCart} titulo="Mejor Puntuados" />
            <FlashDeals productItems={bestSellingProducts} productos={bestSellingProducts} addtoCart={addtoCart} titulo="Más Vendidos" />

            <div className="contenedorr">
                <div className="square colegio">
                    <span className='span'></span>
                    <span className='span'></span>
                    <span className='span'></span>
                    <div className="containerr">
                        <h2>Entrega Rápida</h2>
                        <h3>+10 Rutas</h3>
                        <p>Tu pedido en la puerta, rápido y seguro</p>
                    </div>
                </div>

                <div className="square colegio">
                    <span className='span'></span>
                    <span className='span'></span>
                    <span className='span'></span>
                    <div className="containerr">
                        <h2>Innovación en Compras</h2>
                        <h3>+10 Inversionistas</h3>
                        <p>Innovando el comercio digital con apoyo sólido.</p>
                    </div>
                </div>

                <div className="square colegio">
                    <span className='span'></span>
                    <span className='span'></span>
                    <span className='span'></span>
                    <div className="containerr">
                        <h2 className='h2'>Líder en Bolivia</h2>
                        <h3 className='h3'>N° 1</h3>
                        <p className='p'>El mejor en E-commerce, reconocido y fiable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
