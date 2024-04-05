import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import "./compra.css";
import {ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            // Aquí debería ser navigate en lugar de history para redirigir
            navigate('/login');
        }
    }, [user, firestore, navigate]);

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
        toast.success('🦄 Datos guardado correctamente!', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            }); // Muestra el mensaje de éxito
    };

    const handlePaymentProceed = () => {
        if (isDataComplete) {
            navigate('/payment');
        } else {
            alert('Por favor, completa tus datos personales antes de continuar.');
        }
    };


    // El total a pagar sería la suma de todos los precios de los productos por su cantidad
    const totalPrice = cartItems.reduce((total, item) => {
        const price = parseFloat(item.unitary_price);
        const quantity = parseInt(item.qty, 10);
      
        if (!isNaN(price) && !isNaN(quantity)) {
          return total + (price * quantity);
        } else {
          return total;
        }
      }, 0);

    return (
        <div className="toast">
        <div className="compra-container">
            <div className="user-info-form">
            <h2>Detalles del Cliente</h2>
            <p>Por favor, completa tu información para continuar con la compra:</p>
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

                <select
                    value={userData.gender || ''}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    required
                >
                    <option value="" disabled>Selecciona tu género</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>

                <input
                    type="date"
                    value={userData.birthday_date || ''}
                    onChange={(e) => handleInputChange('birthday_date', e.target.value)}
                    placeholder="Fecha de cumpleaños"
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
            <div className="divider"></div>
      <div className="order-summary">
        <h2>Resumen del Pedido</h2>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.productid} className="product-image" />
            <div>
              <h4>{item.product_name}</h4>
              <p>Cantidad: {item.qty}</p>
              <p>Precio: ${item.unitary_price.toFixed(2)}</p>
              <p>Subtotal: ${(item.qty * item.unitary_price).toFixed(2)}</p>
            </div>
          </div>
        ))}
        <h3>Total a pagar: ${totalPrice.toFixed(2)}</h3>
        <button
        onClick={handlePaymentProceed}
        className={isDataComplete ? "button-enabled" : "button-disabled"}
        disabled={!isDataComplete}>
        Proceder al Pago
    </button>
      </div>
    </div>
     <ToastContainer
     position="bottom-right"
     autoClose={2000}
     hideProgressBar={false}
     newestOnTop
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover={false}
     theme="colored"
     transition: Bounce />
     </div>
  );
}
