import React, { useState, useEffect } from 'react';
import './productpopup.css';
import { getProductCategoryById } from '../../../infraestructure/api/product_category';
import { auth, db } from "../../../infraestructure/firebase--config.js";
import { addDoc, collection, deleteDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPopup = ({ product, onClose, addToCart }) => {
    const user = auth.currentUser;
    const [categoryName, setCategoryName] = useState('');
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const navigate = useNavigate();

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
                if (user) {
                    const querySnapshot = await getDocs(query(collection(db, 'products_ratings'),
                        where('product_id', '==', product.id),
                        where('user_id', '==', user.uid)));

                    if (!querySnapshot.empty) {
                        const userRating = querySnapshot.docs[0].data().rating;
                        console.log('User rating data:', userRating);
                        setRating(userRating);
                        setSelectedRating(userRating);
                    } else {
                        console.log('No user rating found');
                    }
                }
            } catch (error) {
                console.error('Error fetching user rating:', error);
            }
        };

        checkUserRating();
    }, [product.id, user]);


    const addRating = async (productId, rating) => {
        try {
            if (!user) {
                toast.error('Solo los usuarios registrados pueden puntuar. Por favor, inicia sesión.');
                navigate('/login');
                return;
            }
            const ratingsRef = collection(db, 'products_ratings');
            const ratingsQuery = query(ratingsRef, where('product_id', '==', productId), where('user_id', '==', user.uid));
            const querySnapshot = await getDocs(ratingsQuery);

            if (!querySnapshot.empty) {
                const ratingDoc = querySnapshot.docs[0];
                await updateDoc(ratingDoc.ref, {
                    rating: rating,
                    date: new Date().toLocaleDateString()
                });
            } else {
                await addDoc(ratingsRef, {
                    product_id: productId,
                    user_id: user.uid,
                    rating: rating,
                    date: new Date().toLocaleDateString()
                });
            }
            console.log('Calificación actualizada con éxito.');
            setSelectedRating(rating);
        } catch (error) {
            console.error('Error al actualizar la calificación:', error);
        }
    };


    const handleRatingChange = async (currentRating) => {
        if (selectedRating === currentRating) {
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
                        <button className="close-buttonn" onClick={onClose}><i className="fas fa-times"></i></button>
                        <h2>{product.product_name}</h2>
                        <p><strong>Descripción:</strong> {product.description}</p>
                        <p><strong>Categoría:</strong> {categoryName}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <p><strong>Unidad de medida:</strong> {product.gramaje}</p>
                        <p><strong>Precio:</strong> Bs {product.unitary_price}.00</p>
                        <div className="buttons-container">
                            <a href={`https://wa.me/600032422?text=Hola,%20estoy%20interesado%20en%20el%20producto%20${product.product_name}`} target="_blank" rel="noopener noreferrer" className="ask-on-whatsapp">
                                <i className="fab fa-whatsapp"></i> Preguntar
                            </a>
                            {/* Botón para compartir en Facebook */}
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=URL_DEL_PRODUCTO`} target="_blank" rel="noopener noreferrer" className="social-button share-facebook">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a href={`https://twitter.com/intent/tweet?text=Descubre este producto ${product.product_name}&url=URL_DEL_PRODUCTO`} target="_blank" rel="noopener noreferrer" className="social-button share-twitter">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductPopup;
