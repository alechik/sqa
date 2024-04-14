import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../infraestructure/firebase--config';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState(() => {
        // Intenta cargar el carrito existente del localStorage al iniciar
        try {
            const localData = localStorage.getItem('cartItems');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error('Error parsing cart items from localStorage:', error);
            return [];
        }
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        // Sólo actualiza localStorage si hay un usuario conectado
        if (currentUser) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems, currentUser]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(it => it.id === item.id);
            if (existingItem) {
                return prevItems.map(it => it.id === item.id ? { ...it, qty: it.qty + 1 } : it);
            }
            return [...prevItems, { ...item, qty: 1 }];
        });
    };

    const decreaseQty = (id) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(it => it.id === id);
            if (existingItem.qty > 1) {
                return prevItems.map(it => it.id === id ? { ...it, qty: it.qty - 1 } : it);
            }
            return prevItems.filter(it => it.id !== id);
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(it => it.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
        if (currentUser) {
            localStorage.removeItem('cartItems'); // Clear localStorage if user is logged in
        }
    };

    return (
        <AuthContext.Provider value={{ currentUser, cartItems, addToCart, decreaseQty, removeFromCart, clearCart }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
