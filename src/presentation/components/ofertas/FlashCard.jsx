import React, { useState } from "react";
import Slider from "react-slick";
import ProductPopup from "./ProductPopup";
import './flashdeals.css';

const NextArrow = ({ onClick }) => (
    <div className="control-btn" onClick={onClick}>
        <button className="next">
            <i className="fas fa-long-arrow-alt-right"></i>
        </button>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="control-btn" onClick={onClick}>
        <button className="prev">
            <i className="fas fa-long-arrow-alt-left"></i>
        </button>
    </div>
);

const FlashCard = ({ productos, addtoCart }) => {
    const [selectedProduct] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    const openProductPopup = (product) => {
        setSelectedProduct(product);
    };

    const closeProductPopup = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            <Slider {...settings}>
                {productos.map((producto) => (
                    <div className="box" key={producto.id}>
                        <div className="product mtop" onClick={() => openProductPopup(producto)}>
                            <div className="nombreyfoto">
                                <span className="discount">{producto.product_name}</span>
                                <img
                                    className="imgg"
                                    src={producto.pictures || 'path/to/default/image.png'}
                                    alt={producto.product_name}
                                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', minHeight: '200px' }}
                                />
                                <div className="product-like">
                                    <label>0</label> <br />
                                    <i className="far fa-heart"></i>
                                </div>
                            </div>
                            <div className="product-details">
                                <h3 style={{ fontSize: '16px', minHeight: '52px', maxHeight: '52px' }}>
                                    {producto.description}
                                </h3>
                                <div className="rate">
                                    {[...Array(5)].map((_, index) => (
                                        <label key={index}>
                                            <i className='fas fa-star'></i>
                                        </label>
                                    ))}
                                </div>
                                <div className="price">
                                    <h4>${producto.unitary_price}.00</h4>
                                    <button onClick={() => addtoCart(producto)}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {selectedProduct && (
                <ProductPopup
                    product={selectedProduct}
                    onClose={closeProductPopup}
                    addtoCart={addtoCart}
                />
            )}
        </>
    );
};

export default FlashCard;
