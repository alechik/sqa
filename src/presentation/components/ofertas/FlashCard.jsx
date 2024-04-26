import React, { useState } from "react";
import Slider from "react-slick";
import ProductPopup from "./ProductPopup";
import './flashdeals.css'
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fas fa-long-arrow-alt-right"></i>
            </button>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fas fa-long-arrow-alt-left"></i>
            </button>
        </div>
    );
};

const FlashCard = ({ productItems, productos, addtoCart }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
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
                        <div className="product mtop">
                            <div className="nombreyfoto" id={productItems.id} onClick={() => openProductPopup(producto)}>
                                <span className="discount">{producto.product_name}</span>
                                <img
                                    className="imgg"
                                    src={producto.pictures || 'src/presentation/assets/flash/flash-1.png'}
                                    alt='Imagenes de productos'
                                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', minHeight: '200px' }}
                                />
                                <div className="product-like">
                                    <label>0</label> <br />
                                    <i className="far fa-heart"></i>
                                </div>
                            </div>
                            <div className="product-details">
                                <h3 style={{ fontSize: '16px', minHeight: '52px', maxHeight: '52px' }}>{producto.description}</h3>
                                <div className="rate">
                                    {[...Array(5)].map(star => {
                                        return (
                                            // eslint-disable-next-line react/jsx-key
                                            <label>
                                            <i className='fas fa-star'></i>
                                            </label>
                                        )
                                    })}
                                </div>
                                <div className="price">
                                    <h4>{producto.unitary_price}.00</h4>
                                    <button onClick={(e) => {addtoCart(producto); }}>
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