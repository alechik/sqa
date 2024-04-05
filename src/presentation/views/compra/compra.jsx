import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import "./compra.css"

export default function Compra({ cartItems }) {
    const [userData, setUserData] = useState({});
    const [isDataComplete, setIsDataComplete] = useState(false);
    const auth = getAuth();
    const firestore = getFirestore();
    const navigate = useNavigate();
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            const userRef = doc(firestore, 'users', user.uid);
            getDoc(userRef).then(docSnap => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setUserData(data);
                    checkDataCompletion(data);
                }
            });
        } else {
            // Redirigir al usuario a iniciar sesión
            history.push('/login');
        }
    }, [user, firestore, history]);

    const checkDataCompletion = (data) => {
        const requiredFields = ['address', 'birthday_date', 'ci', 'email', 'names'];
        const isComplete = requiredFields.every(field => data[field]);
        setIsDataComplete(isComplete);
    };

    const handleInputChange = (field, value) => {
        setUserData({ ...userData, [field]: value });
    };

    const handleSaveData = async () => {
        const userRef = doc(firestore, 'users', user.uid);
        await updateDoc(userRef, userData);
        checkDataCompletion(userData);
    };

    const handlePaymentProceed = () => {
        // Verificar si la información del usuario está completa
        if (isDataComplete) {
            history.push('/payment');
        } else {
            alert('Por favor, completa tus datos personales antes de continuar.');
        }
    };

    // El total a pagar sería la suma de todos los precios de los productos por su cantidad
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="compra-container">
            <div className="user-info-form">
                <input
                    type="text"
                    value={userData.names || ''}
                    onChange={(e) => handleInputChange('names', e.target.value)}
                    placeholder="Nombre completo"
                    required
                />
                <input
                    type="text"
                    value={userData.address || ''}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Dirección"
                    required
                />
                <input
                    type="text"
                    value={userData.ci || ''}
                    onChange={(e) => handleInputChange('ci', e.target.value)}
                    placeholder="Carnet de Identidad"
                    required
                />
                <input
                    type="email"
                    value={userData.email || ''}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Email"
                    required
                />
                <button onClick={handleSaveData}>Guardar Datos</button>
            </div>
            <div className="order-summary">
                <h2>Resumen del Pedido</h2>
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <span>{item.name}</span>
                        <span>{item.quantity} x ${item.price}</span>
                    </div>
                ))}
                <h3>Total a pagar: ${totalPrice}</h3>
                <button onClick={handlePaymentProceed} disabled={!isDataComplete}>Proceder al Pago</button>
            </div>
        </div>
    );
}
