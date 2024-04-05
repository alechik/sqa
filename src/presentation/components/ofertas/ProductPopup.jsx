import React, { useState, useEffect } from 'react';
import './productpopup.css';
import { getProductCategoryById } from '../../../infraestructure/api/product_category';

const ProductPopup = ({ product, onClose, addToCart }) => {
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        const fetchCategoryName = async () => {
            try {
                const category = await getProductCategoryById(product.category_id);
                setCategoryName(category.name);
            } catch (error) {
                console.error('Error fetching category name:', error);
            }
        };

        fetchCategoryName();
    }, [product.category_id]);

    const handleMouseMove = (e) => {
        const stars = e.target.parentNode.querySelectorAll('.fa-star');
        const mouseX = e.clientX - stars[0].getBoundingClientRect().left;
        const starWidth = stars[0].getBoundingClientRect().width;
        const score = Math.ceil(mouseX / starWidth);

        const scoreSpan = e.target.parentNode.nextElementSibling;
        scoreSpan.textContent = `(${score})`;

        for (let i = 0; i < stars.length; i++) {
            if (i < score) {
                stars[i].classList.add('fas');
            } else {
                stars[i].classList.remove('fas');
            }
        }
    };

    return (
        <div className="product-popup-overlay" onClick={onClose}>
            <div className="product-popup" onClick={(e) => e.stopPropagation()}>
                <div className="product-details-container">
                    <div className="product-left">
                        <img
                            src={product.pictures || 'src/presentation/assets/flash/flash-1.png'}
                            alt={product.product_name}
                            style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px', marginBottom: '20px' }}
                        />
                        <div className="rate">
                            <span className="stars yellow-border" onMouseMove={(e) => handleMouseMove(e)}>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </span>
                            <span className="score">(0)</span>
                        </div>
                    </div>
                    <div className="product-right">
                        <button className="close-button" onClick={onClose}><i className="fas fa-times"></i></button>
                        <h2>{product.product_name}</h2>
                        <p><strong>Descripción:</strong> {product.description}</p>
                        <p><strong>Categoría:</strong> {categoryName}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <p><strong>Unidad de medida:</strong> {product.gramaje}</p>
                        <p><strong>Precio:</strong> ${product.unitary_price}.00</p>
                        <div className="buttons-container">
                            <button className="add-to-cart" onClick={() => addToCart(product)}>Añadir al carrito</button>
                            <a href={`https://wa.me/600032422?text=Hola,%20estoy%20interesado%20en%20el%20producto%20${product.product_name}`} target="_blank" rel="noopener noreferrer" className="ask-on-whatsapp">
                                <i className="fab fa-whatsapp"></i> Preguntar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPopup;
