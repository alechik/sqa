import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from "./Search";
import { getUserProfile } from '../../infraestructure/api/user';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../infraestructure/firebase--config.js';
import './navbar.css';
import tuImagen from '../assets/iconoW.png';
import shoppingCartIcon from '../assets/shopping-cart.png';
import logoutIcon from '../assets/logout.png';
import defaultAvatar from '../assets/usuario.png';
import bellIcon from '../assets/notificacion.png';
import wishlistIcon from '../assets/wishlist.png';
import categoriesIcon from '../assets/categories.png';
import {SearchedProductsProvider} from "../../infraestructure/api/searchedproducts.jsx";

export default function Navbar({ cartItems = [] , setCartItems}) {
    const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
    const [userProfile, setUserProfile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [pendingOrdersCount, setPendingOrdersCount] = useState(0);
    const [reviewOrdersCount, setReviewOrdersCount] = useState(0);
    const navigate = useNavigate();
    const auth = getAuth();
    const modalRef = useRef();

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');

    };

   useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const profile = await getUserProfile(user.uid);
                setUserProfile(profile);

                if (profile.userTypeId === '2') {
                    const ordersRef = collection(db, 'orders');
                    const unsubscribeOrders = onSnapshot(ordersRef, (snapshot) => {
                        const pendingCount = snapshot.docs.filter(doc => doc.data().status === 'Pendiente').length;
                        const reviewCount = snapshot.docs.filter(doc => doc.data().status === 'En revisión').length;
                        setPendingOrdersCount(pendingCount);
                        setReviewOrdersCount(reviewCount);
                    });
                    return () => unsubscribeOrders();
                }
            } else {
                setUserProfile(null);
            }
        });
        return () => unsubscribe();
    }, [auth]);

    const logout = () => {
        // Cerrar sesión del usuario
        signOut(auth).then(() => {
            // Vaciar el carrito de compras
            clearCart();
            // Navegar a la página de inicio de sesión
            navigate('/login');
        })
    };


    const handleLogoClick = (event) => {
        event.preventDefault();
        if (userProfile) {
            setShowModal(true);
            document.body.style.overflow = 'hidden';
        }
    };

    const handleCloseModal = () => {
        const modal = document.querySelector('.modal-contentt');
        if (modal) {
            modal.classList.add('hide');
            setTimeout(() => {
                setShowModal(false);
                document.body.style.overflow = 'auto';
            }, 300);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal();
            }
        };

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    const handleModalOptionClick = (option) => {
        switch (option) {
            case 'wishlist':
                navigate('/wishlist');
                break;
            case 'logout':
                logout();
                break;
            default:
                break;
        }
        handleCloseModal();
    };

    return (
        <nav className="nav">
            <div className="logo-container">
                <a href="/" className="logo-link" onClick={handleLogoClick}>
                    <img src={tuImagen} alt="logo" className="logo-image" />
                    <span className="store-name">Saltillo</span>
                </a>
            </div>
                <Search />
            <ul className="navegacion">
                {userProfile ? (
                    <>
                        <li>
                            <div className='wishlist'>
                                <Link to='/Category' className="wishlist-link" title='Categorias'>
                                    <img src={categoriesIcon} alt="wishlist" />
                                </Link>
                            </div>
                            {userProfile.userTypeId === '2' && (
                                <div className='notifications'>
                                    <Link to='/notifications' className='notification-link' title='Notificaciones' >
                                        <img src={bellIcon} alt='Notificaciones' />
                                        <span className='notification-count'>{pendingOrdersCount + reviewOrdersCount}</span>
                                    </Link>
                                </div>
                            )}
                            <div className='cart'>
                                <Link to='/cart' className="cart-link">
                                    <img src={shoppingCartIcon} alt="Carrito" title='Carrito' />
                                    <span>{totalItems}</span>
                                </Link>
                            </div>
                            <Link to={userProfile.userTypeId === '1' ? "/admin/AdminInfo" : "/perfil"} className="perfil-link">
                                <img src={userProfile.avatar || defaultAvatar} alt="Perfil" className="navbar-avatar" />
                            </Link>
                        </li>
                    </>
                ) : (
                    <li className='links'>
                        <Link to="/login">Iniciar sesión</Link>
                    </li>
                )}
            </ul>

            {/* Modal */}
            {userProfile && showModal && (
                <div className="modal">
                    <div className="modal-contentt" ref={modalRef}>
                        <span className="close" onClick={handleCloseModal}>
                            &times;
                        </span>
                        <div className="modal-options">
                            {(userProfile?.userTypeId === '1' || userProfile?.userTypeId === '3') && (
                                <div className="modal-option" onClick={() => handleModalOptionClick('wishlist')}>
                                    <img src={wishlistIcon} alt="Wishlist" />
                                    <span>Lista de Deseos</span>
                                </div>
                            )}
                            <div className="modal-option" onClick={() => handleModalOptionClick('logout')}>
                                <img src={logoutIcon} alt="Logout" />
                                <span>Cerrar Sesión</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
