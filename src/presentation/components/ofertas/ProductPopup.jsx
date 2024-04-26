import React, { useState, useEffect } from 'react';
import './productpopup.css';
import { getProductCategoryById } from '../../../infraestructure/api/product_category';
import {auth,db} from "../../../infraestructure/firebase--config.js";
import {addDoc, collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";

const ProductPopup = ({ product, onClose, addToCart }) => {
    const user = auth.currentUser
    const [categoryName, setCategoryName] = useState('');
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null); // Nuevo estado para rastrear la estrella seleccionada previamente
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

    useEffect(() => {
        const checkUserRating = async () => {
            try {
                const querySnapshot = await getDocs(query(collection(db, 'products_ratings'),
                    where('product_id', '==', product.id),
                    where('user_id', '==', user.uid)));

                if (!querySnapshot.empty) {
                    const userRating = querySnapshot.docs[0].data().rating;
                    console.log('User rating data:', userRating);
                    setRating(userRating); // Almacena la calificación del usuario en el estado
                    setSelectedRating(userRating);
                } else {
                    console.log('No user rating found');
                }
            } catch (error) {
                console.error('Error fetching user rating:', error);
            }
        };

        checkUserRating();
    }, [product.id, user.uid])



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
            const productsRatingRef = collection(db,'products_ratings');

            // Crear un nuevo documento con los datos proporcionados
            await addDoc(productsRatingRef, {
                date: new Date().toLocaleDateString(), // Obtener la fecha actual
                // eslint-disable-next-line react/prop-types
                product_id: product.id,
                rating: rating,
                user_id: user.uid
            });

            console.log('Datos de rating insertados exitosamente.');
            setSelectedRating(rating);
        } catch (error) {
            console.error('Error al insertar datos de rating:', error);
        }
    };

    const handleRatingChange = async (currentRating) => {
        // Verificar si la estrella seleccionada previamente es la misma que la actual
        if (selectedRating === currentRating) {
            // Si es la misma estrella, no permitir que el usuario vote nuevamente la misma calificación
            return;
        }
        setRating(currentRating);
        await addRating(product.id, currentRating);
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
                            <span className="stars yellow-border">
                                {[...Array(5)].map((_, index) => {
                                    const starValue = index + 1;
                                    return (
                                        <label key={index}>
                                            <input
                                                type='radio'
                                                name='rating'
                                                value={starValue}
                                                onChange={() => handleRatingChange(starValue)}
                                                disabled={selectedRating === starValue}
                                            />
                                            <i className='fas fa-star' style={{ color: starValue <= (hover || rating) ? '#ffc107' : "#e4e5e9" }}
                                               onMouseEnter={() => setHover(starValue)}
                                               onMouseLeave={() => setHover(null)}>
                                            </i>
                                        </label>
                                    );
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
