import './home.css'
import React, { useState } from 'react';
import Carousel from "../components/Carousel.jsx";
import FlashDeals from "../components/ofertas/FlashDeals.jsx";
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
export default function Home({productItems, productos, addtoCart}) {
    const [showForm, setShowForm] = useState(false);

    return <div className='container'>
        <Carousel/>


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


        <FlashDeals productItems={productItems} productos={productos} addtoCart={addtoCart} titulo="recien añadidos"/>
        <FlashDeals productItems={productItems} productos={productos} addtoCart={addtoCart} titulo="Mas puntuado"/>
        <FlashDeals productItems={productItems} productos={productos} addtoCart={addtoCart} titulo="Mas vendidos"/>
    </div>
}
