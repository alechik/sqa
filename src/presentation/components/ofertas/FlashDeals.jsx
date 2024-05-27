// eslint-disable-next-line no-unused-vars
import React from "react";
import FlashCard from "./FlashCard.jsx";
/*import './flashdeals.css'*/
// eslint-disable-next-line react/prop-types
const FlashDeals = ({ productItems, addtoCart, productos , titulo}) => {
    return (
        <>
            <section className='flash'>
                <div className='contenedor'>
                    <div className='heading f_flex'>
                        <i className='fa fa-bolt'></i>
                        <h1 className="productossr">Productos {titulo}</h1>
                    </div>
                    <FlashCard productItems={productItems} addtoCart={addtoCart} productos={productos} />
                </div>
            </section>
        </>
    )
}

export default FlashDeals

