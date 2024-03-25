import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from "./Search";
import { getUserProfile } from '../../infraestructure/api/user';
import "./navbar.css";

export default function Navbar() {
    const [userProfile, setUserProfile] = useState(null);
    const navigate = useNavigate(); // Hook para navegar

    useEffect(() => {
        const checkUserAuthentication = async () => {
            const profile = await getUserProfile();
            if (profile) {
                setUserProfile(profile);
            }
        };

        checkUserAuthentication();
    }, []);

    const logout = () => {
        localStorage.removeItem('isLoggedIn'); // Remover el indicador de sesión
        setUserProfile(null); // Resetear el estado de perfil de usuario
        navigate('/iniciarsesion'); // Redirige al usuario a la página de inicio de sesión
    };

    return (
        <nav className="nav">
            <Link to="/" className="nombre-sitio">Tienda</Link>
            <Search />
            <ul className="navegacion">
                {userProfile ? (
                    <li>
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
