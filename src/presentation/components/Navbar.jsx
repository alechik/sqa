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
import bagIcon from '../assets/bag.png'; // Asegúrate de tener esta imagen en tus assets si la quieres usar

export default function Navbar({ cartItems = [] }) {
    const totalItems = cartItems.reduce((total, item) => total + item.qty, 0); // Calcula el total de items en el carrito, sumando cantidades
    const [userProfile, setUserProfile] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const fetchCategories = async () => {
            const mockCategories = [
                { id: 1, name: 'Category 1' },
                { id: 2, name: 'Category 2' },
                { id: 3, name: 'Category 3' }
            ];
            setCategories(mockCategories);
        };
        fetchCategories();
    }, []);

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
        signOut(auth); // Usa signOut de firebase/auth para cerrar sesión
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
                    <li>
                        <div className='wishlist'>
                            <Link to='/wishlist' className='wishlist-link'>
                                <img src={bagIcon} alt='Wishlist' />
                            </Link>
                        </div>
                        <div className='cart'>
                            <Link to='/cart' className="cart-link">
                                <img src={shoppingCartIcon} alt="Carrito" />
                                <span>{totalItems}</span>
                            </Link>
                        </div>
                        {userProfile.userTypeId === '1' && <Link to="/admin/AdminInfo" className="perfil-link"><img
                            src={userProfile.avatar || defaultAvatar}
                            alt="Perfil"
                            className="navbar-avatar"
                        /></Link>}
                        {userProfile.userTypeId === '2' && <Link to="/admin/crud-productos" className="perfil-link"><img
                            src={userProfile.avatar || defaultAvatar}
                            alt="Perfil"
                            className="navbar-avatar"
                        /></Link>}
                        {userProfile.userTypeId === '3' && <Link to="/perfil" className="perfil-link"><img
                            src={userProfile.avatar || defaultAvatar}
                            alt="Perfil"
                            className="navbar-avatar"
                        /></Link>}
                        <button onClick={logout} className="logout-button" title="Cerrar Sesión">
                            <img src={logoutIcon} alt="Cerrar Sesión" />
                        </button>
                    </li>
                ) : (
                    <li className='links'>
                        <Link to="/login">Iniciar sesión</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
