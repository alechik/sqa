import React, { useState, useEffect } from 'react';
import './productpopup.css';
import { getProductCategoryById } from '../../../infraestructure/api/product_category';
import {auth,db} from "../../../infraestructure/firebase--config.js";
import { doc, getDoc } from "firebase/firestore";

const ProductPopup = ({ product, onClose, addToCart }) => {
    const user = auth.currentUser
    const [categoryName, setCategoryName] = useState('');
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    useEffect(() => {
        const fetchCategoryName = async () => {
            try {
                const category = await getProductCategoryById(product.CategoryID);
                setCategoryName(category.name);
            } catch (error) {
                console.error('Error fetching category name:', error);
            }
        };

        fetchCategoryName();
    }, [product.CategoryID]);

    /*const handleMouseMove = (e) => {
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
    };*/

    const addRating = async (productId, rating) => {
        try {
            // Obtener una referencia a la colección products_rating
            const productsRatingRef = doc(db,'products_rating');

            // Crear un nuevo documento con los datos proporcionados
            await productsRatingRef.add({
                date: new Date().toLocaleDateString(), // Obtener la fecha actual
                product_id: productId,
                rating: rating,
                user_id: user.uid
            });

            console.log('Datos de rating insertados exitosamente.');
        } catch (error) {
            console.error('Error al insertar datos de rating:', error);
        }
    };


    return (
        <div className={`product-popup-overlay ${product ? 'active' : ''}`} onClick={onClose}>
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
                                 {[...Array(5)].map((star,index) => {
                                     const currentRating = index + 1
                                     return (
                                         // eslint-disable-next-line react/jsx-key
                                         <label key={index}>
                                             <input
                                             key={star}
                                             type='radio'
                                             name='rating'
                                             value={currentRating}
                                             onChange={() => setRating(currentRating)}
                                             />
                                             <i className='fas fa-star' style={{color : currentRating <= (hover || rating) ? '#ffc107' : "#e4e5e9",}}
                                                onMouseEnter={() => setHover(currentRating)}
                                                onMouseLeave={() => setHover(null)}>

                                             </i>
                                         </label>
                                     )
                                 })}
                            </span>
                            <span className="score">{rating}</span>
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
