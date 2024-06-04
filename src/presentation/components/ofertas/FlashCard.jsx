import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductPopup from "./ProductPopup";
import './flashdeals.css';
import { fetchRatingsForProduct } from "../../../infraestructure/api/product_rating.js";

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
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productsWithRatings, setProductsWithRatings] = useState([]);

    useEffect(() => {
        const loadRatings = async () => {
            if (!productos) return; // Verificar si productos está disponible
            const tempProductsWithRatings = await Promise.all(productos.map(async producto => {
                const averageRating = await fetchRatingsForProduct(producto.id) || 0; // Retorna 0 si no hay calificación
                return { ...producto, averageRating };
            }));
            setProductsWithRatings(tempProductsWithRatings);
        };
        loadRatings();
    }, [productos]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ],
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const openProductPopup = product => setSelectedProduct(product);
    const closeProductPopup = () => setSelectedProduct(null);

    return (
        <>
            <Slider {...settings}>
                {productsWithRatings.map(producto => (
                    <div className="box" key={producto.id}>
                        <div className="product mtop" onClick={() => openProductPopup(producto)}>
                            <div className="nombreyfoto">
                                <span className="discount">{producto.product_name}</span>
                                <img src={producto.pictures || 'placeholder.jpg'} alt="Product" style={{ maxWidth: '100%', height: '200px' }} />
                            </div>
                            <div className="product-details">
                                <h3>{producto.description}</h3>
                                <div className="rate">
                                    {[...Array(5)].map((_, index) => (
                                        <i key={index} className={`fas fa-star ${index < producto.averageRating ? 'text-gold' : 'text-muted'}`}></i>
                                    ))}
                                    <span>{producto.averageRating.toFixed(1)}</span>
                                </div>
                                <div className="price">
                                    <h4>${producto.unitary_price}</h4>
                                    <button onClick={() => addtoCart(producto)}>
                                        <i className="fas fa-plus"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {selectedProduct && <ProductPopup product={selectedProduct} onClose={closeProductPopup} addtoCart={addtoCart} />}
        </>
    );
};

export default FlashCard;
