import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading, error } = useAuth();

    if (loading) {
        return <div>Cargando...</div>;  // Opcionalmente, podrías usar un componente de carga
    }

    if (error) {
        return <div>Error: {error.message}</div>;  // Muestra mensajes de error relacionados con la autenticación
    }

    return currentUser ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
