import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import ProductPopup from "./ProductPopup";
import './flashdeals.css'
import {fetchRatingsForProduct} from "../../../infraestructure/api/product_rating.js";

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
    const [productsWithRatings, setProductsWithRatings] = useState([]);

    useEffect(() => {
        console.log("Updated productsWithRatings:", productsWithRatings);
    }, [productsWithRatings]);

    useEffect(() => {
        const loadRatings = async () => {
            const tempProductsWithRatings = await Promise.all(productos.map(async producto => {
                const averageRating = await fetchRatingsForProduct(producto.id);
                console.log(`Rating for product ${producto.id}:`, averageRating);  // Muestra la calificación promedio para cada producto
                return { ...producto, averageRating };  // Añade el promedio de calificaciones al objeto del producto
            }));
            console.log("All products with ratings:", tempProductsWithRatings);  // Muestra todos los productos con sus calificaciones
            setProductsWithRatings(tempProductsWithRatings);
        };

        loadRatings();
    }, [productos]);
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
                {productsWithRatings.map((producto) => (
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
                                    {[...Array(5)].map((_, index) => (
                                        <i key={index} className={`fas fa-star ${index < producto.averageRating ? 'text-gold' : 'text-muted'}`} />
                                    ))}
                                    <span className="rating-number">{producto.averageRating}</span>
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