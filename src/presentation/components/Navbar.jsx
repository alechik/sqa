import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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

export default function Navbar({ cartItems, setCartItems }) {
    const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
    const [userProfile, setUserProfile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const auth = getAuth();
    const modalRef = useRef();
    const [pendingOrdersCount, setPendingOrdersCount] = useState(0);
    const [reviewOrdersCount, setReviewOrdersCount] = useState(0);

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    useEffect(() => {
        // Cerrar el modal al cambiar la ubicación
        const handleRouteChange = () => {
            if (showModal) {
                handleCloseModal();
            }
        };

        // Escucha cambios en la ubicación
        location.pathname;

        return () => {
            handleRouteChange();
        };
    }, [location, showModal]);  // Dependencias actualizadas

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
                handleCloseModal();
            }
        });
        return () => unsubscribe();
    }, [auth]);

    const logout = () => {
        signOut(auth).then(() => {
            clearCart();
            navigate('/login');
        }).finally(() => {
            handleCloseModal();  // Asegurarse de que la modal y el overflow se manejen correctamente al salir
        });
    };

    const handleProfileClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        const modal = document.querySelector('.modal-contentt');
        if (modal) {
            modal.classList.add('hide');
            setTimeout(() => {
                setShowModal(false);
            }, 300);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal();
            }
        };

        // Agregar y remover el listener de eventos
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="nav">
            <div className="logo-container">
                <Link to="/" className="logo-link">
                    <img src={tuImagen} alt="logo" className="logo-image" />
                    <span className="store-name">Saltillo</span>
                </Link>
            </div>
            <Search />
            <ul className="navegacion">
                {userProfile ? (
                    <>
                        <li>
                            <div className='wishlist'>
                                <Link to='/Category' className="wishlist-link" title='Categorias'>
                                    <img src={categoriesIcon} alt="Categorias" />
                                </Link>
                            </div>
                            {userProfile.userTypeId === '2' && (
                                <div className='notifications'>
                                    <Link to='/notifications' className='notification-link' title='Notificaciones'>
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
                            <div onClick={handleProfileClick} className="perfil-link">
                                <img src={userProfile.avatar || defaultAvatar} alt="Perfil" className="navbar-avatar" />
                            </div>
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
                        <div className="modal-option" onClick={() => navigate(userProfile.userTypeId === '1' ? '/Admin/AdminInfo' : '/perfil')}>
                                <img src={defaultAvatar} alt="Perfil" />
                                <span>{userProfile.userTypeId === '1' ? 'Perfil' : 'Perfil'}</span>
                            </div>
                            {(userProfile.userTypeId === '1' || userProfile.userTypeId === '3') && (
                                <div className="modal-option" onClick={() => navigate('/wishlist')}>
                                    <img src={wishlistIcon} alt="Lista de Deseos" />
                                    <span>Lista de Deseos</span>
                                </div>
                            )}
                            <div className="modal-option" onClick={logout}>
                                <img src={logoutIcon} alt="Cerrar Sesión" />
                                <span>Cerrar Sesión</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
