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
        <FlashDeals productItems={productItems} productos={productos} addtoCart={addtoCart} titulo="recien añadidos"/>
        <FlashDeals productItems={productItems} productos={productos} addtoCart={addtoCart} titulo="Mas puntuado"/>
        <FlashDeals productItems={productItems} productos={productos} addtoCart={addtoCart} titulo="Mas vendidos"/>
    </div>
}
