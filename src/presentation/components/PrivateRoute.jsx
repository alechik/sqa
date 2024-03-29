import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();

    return currentUser ? children : < Navigate to="/iniciarsesion" />;
};

export default PrivateRoute;