import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from "./Search";
import { getUserProfile } from '../../infraestructure/api/user';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "./navbar.css";
import tuImagen from '../assets/iconoW.png';
import shoppingCartIcon from '../assets/shopping-cart.png';
import logoutIcon from '../assets/logout.png';

export default function Navbar({ cartitem }) {
    const [userProfile, setUserProfile] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate(); // Hook para navegar
    const auth = getAuth(); // Inicializa la autenticación de Firebase

    useEffect(() => {
        const fetchCategories = async () => {
            // Simula la obtención de categorías desde la base de datos
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
                // El usuario ha iniciado sesión, obtén su perfil
                const profile = await getUserProfile(user.uid); // Asume que getUserProfile puede tomar un UID y retornar datos de perfil
                setUserProfile(profile);
            } else {
                // El usuario ha cerrado sesión
                setUserProfile(null);
            }
        });
        return () => unsubscribe(); // Desuscribirse al desmontar el componente
    }, []);

    const logout = () => {
        auth.signOut(); // Cierra sesión en Firebase
        navigate('/iniciarsesion'); // Redirige al usuario a la página de inicio de sesión
    };

    return (
        <nav className="nav">
            <Link to="/" className="nombre-sitio"> <img src={tuImagen} alt="logo" /></Link>
            <Search />
            <ul className="navegacion">
                {userProfile ? (
                    <li>
                        <div className='cart'>
                            <Link to='/cart' className="cart-link">
                                <img src={shoppingCartIcon} alt="Carrito" ></img>
                                <span>{cartitem.length === 0 ? "" : cartitem.length}</span>
                            </Link>
                        </div>
                        {userProfile.userTypeId === '1' && <Link to="/admin/AdminInfo" className="perfil-link"><img
                            src={userProfile.avatar || 'src/presentation/assets/usuario.png'}
                            alt="Perfil"
                            className="navbar-avatar"
                            style={{ borderRadius: '20%', width: '50px', height: '50px' }}
                        /></Link>}
                        {userProfile.userTypeId === '2' && <Link to="/admin/crud-productos" className="perfil-link"><img
                            src={userProfile.avatar || 'src/presentation/assets/usuario.png'}
                            alt="Perfil"
                            className="navbar-avatar"
                            style={{ borderRadius: '20%', width: '50px', height: '50px' }}
                        /></Link>}
                        {userProfile.userTypeId === '3' && <Link to="/perfil" className="perfil-link"><img
                            src={userProfile.avatar || 'src/presentation/assets/usuario.png' }
                            alt="Perfil"
                            className="navbar-avatar"
                            style={{ borderRadius: "20%", width: "50px", height: "50px", objectfit: "cover" }}
                        /></Link>}
                        <button onClick={logout} className  ="logout-button" title="Cerrar Sesión" alt="Cerrar Sesión" >
                            <img src={logoutIcon} alt='logout'></img>
                        </button>
                    </li>
                ) : (
                    <li className='links'>
                        <Link to="/iniciarsesion">Iniciar sesión</Link>     
                    </li>
                )}
            </ul>
        </nav>
    );
}
