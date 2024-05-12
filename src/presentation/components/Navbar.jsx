import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from "./Search";
import { getUserProfile } from '../../infraestructure/api/user';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import "./navbar.css";
import tuImagen from '../assets/iconoW.png';
import shoppingCartIcon from '../assets/shopping-cart.png';
import logoutIcon from '../assets/logout.png';
import defaultAvatar from '../assets/usuario.png';
import bagIcon from '../assets/bag.png';
import bellIcon from '../assets/notificacion.png';

export default function Navbar({ cartItems = [] }) {
    const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
    const [userProfile, setUserProfile] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const profile = await getUserProfile(user.uid);
                setUserProfile(profile);
            } else {
                setUserProfile(null);
            }
        });
        return () => unsubscribe();
    }, [auth]);

    const logout = () => {
        signOut(auth);
        navigate('/login');
    };

    const handleLogoClick = () => {
        navigate('/');
        window.location.reload();
    };

    return (
        <nav className="nav">
            <Link to="/" className="nombre-sitio" onClick={handleLogoClick}><img src={tuImagen} alt="logo" /></Link>
            <Search />
            <ul className="navegacion">
                {userProfile ? (
                    <>
                        <li>
                            {/* Wishlist visible solo para clientes y admin */}
                            {(userProfile.userTypeId === '1' || userProfile.userTypeId === '3') && (
                                <div className='wishlist'>
                                    <Link to='/wishlist' className='wishlist-link'>
                                        <img src={bagIcon} alt='Wishlist' />
                                    </Link>
                                </div>
                            )}
                            {/* Notificaciones visibles solo para trabajadores */}
                            {userProfile.userTypeId === '2' && (
                                <div className='notifications'>
                                    <Link to='/notifications' className='notification-link'>
                                        <img src={bellIcon} alt='Notificaciones' />
                                        <span>3</span> {/* Ejemplo de número de notificaciones */}
                                    </Link>
                                </div>
                            )}
                            <div className='cart'>
                                <Link to='/cart' className="cart-link">
                                    <img src={shoppingCartIcon} alt="Carrito" />
                                    <span>{totalItems}</span>
                                </Link>
                            </div>
                            <Link to={userProfile.userTypeId === '1' ? "/admin/AdminInfo" : "/perfil"} className="perfil-link">
                                <img src={userProfile.avatar || defaultAvatar} alt="Perfil" className="navbar-avatar" />
                            </Link>
                            <button onClick={logout} className="logout-button" title="Cerrar Sesión">
                                <img src={logoutIcon} alt="Cerrar Sesión" />
                            </button>
                        </li>
                    </>
                ) : (
                    <li className='links'>
                        <Link to="/login">Iniciar sesión</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
