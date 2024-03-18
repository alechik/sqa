// eslint-disable-next-line no-unused-vars
import React from "react";
import FlashCard from "./FlashCard.jsx";
/*import './flashdeals.css'*/
// eslint-disable-next-line react/prop-types
const FlashDeals = ({ productItems, addToCart, productos , titulo}) => {
    return (
        <>
            <section className='flash'>
                <div className='contenedor'>
                    <div className='heading f_flex'>
                        <i className='fa fa-bolt'></i>
                        <h1>Productos {titulo}</h1>
                    </div>
                    <FlashCard productItems={productItems} addToCart={addToCart} productos={productos} />
                </div>
            </section>
        </>
    )
}

export default FlashDeals

