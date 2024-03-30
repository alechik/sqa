import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from "./Search";
import { getUserProfile } from '../../infraestructure/api/user';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "./navbar.css";

export default function Navbar({cartitem}) {
    const [userProfile, setUserProfile] = useState(null);
    const navigate = useNavigate(); // Hook para navegar
    const auth = getAuth(); // Inicializa la autenticación de Firebase

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
            <Link to="/" className="nombre-sitio">Tienda</Link>
            <Search />
            <ul className="navegacion">
                {userProfile ? (
                    <li>
                        <div className='cart'>
                        <Link to='/cart'>
                            <i className="fa fa-shopping-bag icon-circle"></i>
                            <span>{cartitem.length === 0 ? "" : cartitem.length}</span>
                        </Link>
                        </div>
                        {userProfile.userTypeId === '1' && <Link to="/admin/:activepage"><img
                            src={userProfile.avatar || '/user-profile.png'}
                            alt="Perfil"
                            className="navbar-avatar"
                            style={{ borderRadius: '20%', width: '50px', height: '50px' }}
                        /></Link>}
                        {userProfile.userTypeId === '2' && <Link to="/admin/crud-productos"><img
                            src={userProfile.avatar || '/user-profile.png'}
                            alt="Perfil"
                            className="navbar-avatar"
                            style={{ borderRadius: '20%', width: '50px', height: '50px' }}
                        /></Link>}
                        {userProfile.userTypeId === '3' && <Link to="/perfil"><img
                            src={userProfile.avatar || '/user-profile.png'}
                            alt="Perfil"
                            className="navbar-avatar"
                            style={{ borderRadius: "20%", width: "50px", height: "50px", objectfit: "cover"}}
                        /></Link>}
                        <button onClick={logout} className="logout-button" title="Cerrar Sesión">
                            <i className="fas fa-sign-out-alt logout-icon"></i>
                        </button>
                    </li>
                ) : (
                    <li>
                        <Link to="/iniciarsesion">Iniciar sesión</Link>
                        <Link to="/registrarse">Registrarse</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
