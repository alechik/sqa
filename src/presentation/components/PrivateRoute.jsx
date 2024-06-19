import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';

const PrivateRoute = ({ children, allowedTypes }) => {
    const { currentUser } = useAuth();
    const location = useLocation();

    if (!currentUser) {
        // No hay usuario logueado
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else if (allowedTypes && !allowedTypes.includes(currentUser.userType)) {
        // Usuario no tiene permisos adecuados
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
