import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../infraestructure/firebase--config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';

export const AuthContext = createContext({ currentUser: null }); // Proporciona un valor inicial coherente

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userRef = doc(getFirestore(), "users", user.uid);
                const userProfile = await getDoc(userRef);
                const userType = userProfile.exists() ? userProfile.data().userTypeId : null;
                setCurrentUser({ ...user, userType });
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Renderiza el contenido de loading sin interrumpir la provisión del contexto
    if (loading) {
        return (
            <AuthContext.Provider value={{ currentUser }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <TailSpin color="#CD5454" height={80} width={80} />
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
