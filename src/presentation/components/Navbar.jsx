import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import Search from "./Search.jsx";
import { getUserProfile } from '../../infraestructure/api/user';

export default function Navbar() {
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const loadUserProfile = async () => {
            const profile = await getUserProfile();
            setUserProfile(profile);
        };

        loadUserProfile();
    }, []);

    return (
        <nav className="nav">
            <Link to="/" className="nombre-sitio">Tienda</Link>
            <Search />
            <ul className="navegacion">
                {userProfile ? (
                    // Mostrar información del usuario cuando esté logueado
                    <li>
                        <img src={userProfile.avatar || '/user-profile.png'} alt="Perfil" className="navbar-avatar" />
                        <Link to="/mi-perfil">Mi perfil</Link>
                        {/* Aquí puedes agregar más enlaces o botones según el tipo de usuario */}
                        {userProfile.userTypeId === '1' && <Link to="/admin-dashboard">Admin</Link>}
                        {userProfile.userTypeId === '2' && <Link to="/worker-dashboard">Dashboard</Link>}
                        {userProfile.userTypeId === '3' && <Link to="/client-home">Client</Link>}
                    </li>
                ) : (
                    // Mostrar opciones de inicio de sesión o registro si no hay un usuario logueado
                    <li>
                        <Link to="/iniciarsesion">Iniciar sesión</Link>
                        <Link to="/registrarse">Registrarse</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
