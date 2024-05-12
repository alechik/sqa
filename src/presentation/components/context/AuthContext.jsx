import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../infraestructure/firebase--config';
import { TailSpin } from 'react-loader-spinner';

export const AuthContext = createContext({ currentUser: null }); // Proporciona un valor inicial coherente

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Renderiza el contenido de loading sin interrumpir la provisión del contexto
    if (loading) {
        return (
            <AuthContext.Provider value={{ currentUser }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <TailSpin color="#00BFFF" height={80} width={80} />
                </div>
            </AuthContext.Provider>
        );
    }

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
