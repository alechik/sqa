import React, { useState, useEffect } from 'react';
import './productpopup.css';
import { getProductCategoryById } from '../../../infraestructure/api/product_category';
import {auth,db} from "../../../infraestructure/firebase--config.js";
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where} from "firebase/firestore";

const ProductPopup = ({ product, onClose, addToCart }) => {
    const user = auth.currentUser
    const [categoryName, setCategoryName] = useState('');
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [isInWishlist, setIsInWishlist] = useState(false);
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

        checkIfInWishlist();
        checkUserRating();
    }, [product.id, user.uid])


    const checkIfInWishlist = async () => {
        try {
            const wishlistRef = collection(db, 'wishlist');
            const querySnapshot = await getDocs(query(wishlistRef, where('product_id', '==', product.id), where('user_id', '==', user.uid)));
            setIsInWishlist(!querySnapshot.empty); // Actualiza el estado isInWishlist en función de si el documento existe en la colección de wishlist
        } catch (error) {
            console.error('Error checking wishlist:', error);
        }
    };
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
            // Obtener una referencia a la colección de calificaciones
            const ratingsRef = collection(db, 'products_ratings');
            // Intentar encontrar un documento de calificación existente
            const ratingsQuery = query(ratingsRef, where('product_id', '==', productId), where('user_id', '==', user.uid));
            const querySnapshot = await getDocs(ratingsQuery);

            if (!querySnapshot.empty) {
                // Documento encontrado, actualizar la calificación
                const ratingDoc = querySnapshot.docs[0];
                await updateDoc(ratingDoc.ref, {
                    rating: rating,
                    date: new Date().toLocaleDateString()
                });
            } else {
                // No se encontró el documento, crear uno nuevo
                await addDoc(ratingsRef, {
                    product_id: productId,
                    user_id: user.uid,
                    rating: rating,
                    date: new Date().toLocaleDateString()
                });
            }
            console.log('Calificación actualizada con éxito.');
            setSelectedRating(rating); // Actualiza el estado local
        } catch (error) {
            console.error('Error al actualizar la calificación:', error);
        }
    };


    const handleWishlistButtonClick = async () => {
        try {
            const wishlistRef = collection(db, 'wishlist');
            if (isInWishlist) {
                // Si el producto está en la lista de deseos, eliminarlo
                const querySnapshot = await getDocs(query(wishlistRef, where('product_id', '==', product.id), where('user_id', '==', user.uid)));
                querySnapshot.forEach(async (doc) => {
                    await deleteDoc(doc.ref);
                });
            } else {
                // Si el producto no está en la lista de deseos, agregarlo
                await addDoc(wishlistRef, {
                    product_id: product.id,
                    user_id: user.uid
                });
            }
            // Actualizar el estado isInWishlist después de agregar o eliminar el producto
            setIsInWishlist(!isInWishlist);
        } catch (error) {
            console.error('Error adding/removing product to/from wishlist:', error);
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
                            <button className="add-to-cart" onClick={handleWishlistButtonClick}>
                                {isInWishlist ? 'Eliminar de la lista de deseos' : 'Agregar a la lista de deseos'}
                            </button>
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
