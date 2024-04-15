import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import "./compra.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Compra({ cartItems }) {
    const [userData, setUserData] = useState({});
    const [isDataComplete, setIsDataComplete] = useState(false);
    const auth = getAuth();
    const firestore = getFirestore();
    const navigate = useNavigate();
    const user = auth.currentUser;
    const mapRef = useRef(null);

    useEffect(() => {
        if (!user) {
            toast.error('Por favor, inicia sesión para continuar.');
            navigate('/iniciarsesion');
            return;
        }

        const userRef = doc(firestore, 'users', user.uid);
        getDoc(userRef).then(docSnap => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setUserData(data);
                checkDataCompletion(data);
            } else {
                toast.error('Datos de usuario no encontrados.');
                navigate('/iniciarsesion');
            }
        });

        loadGoogleMapScript().then(() => window.initMap());
    }, [user, firestore, navigate]); // Dependencies optimized

    useEffect(() => {
        window.initMap = initMap; // Defining initMap globally
    }, []);

    const loadGoogleMapScript = () => {
        return new Promise((resolve) => {
            if (window.google) {
                resolve();
            } else {
                const existingScript = document.querySelector('script[src^="https://maps.googleapis.com"]');
                if (!existingScript) {
                    const script = document.createElement("script");
                    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDF8jKuen4pA9YJvZWBTLlIPOYpzgJ9i6E&libraries=places&callback=initMap";
                    script.async = true;
                    script.defer = true;
                    document.head.appendChild(script);
                    script.onload = () => resolve();
                } else {
                    existingScript.onload = () => resolve();
                }
            }
        });
    };

    const initMap = () => {
        const initialLocation = { lat: -17.72213363647461, lng: -63.174591064453125 };
        const map = new window.google.maps.Map(mapRef.current, {
            zoom: 13,
            center: initialLocation,
        });
        const marker = new window.google.maps.Marker({
            position: initialLocation,
            map: map,
            draggable: true,
            title: "Drag me!"
        });

        marker.addListener('dragend', () => {
            const newPos = marker.getPosition();
            geocodePosition(newPos);
        });
    };

    const geocodePosition = (pos) => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: pos }, (results, status) => {
            if (status === 'OK' && results[0]) {
                setUserData(prevState => ({
                    ...prevState,
                    address: results[0].formatted_address
                }));
                toast.info(`Address updated: ${results[0].formatted_address}`);
            } else {
                toast.error('Failed to retrieve address.');
            }
        });
    };

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
        toast.success('Datos actualizados correctamente!');
    };

    const handlePaymentProceed = () => {
        if (isDataComplete) {
            navigate('/payment', { state: { user: userData, cartItems } });
        } else {
            toast.error('Por favor, completa tus datos personales antes de continuar.');
        }
    };

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
                    <input className='inputcompra' type="text" value={userData.names || ''} onChange={(e) => handleInputChange('names', e.target.value)} placeholder="Nombre completo" required />
                    <input className='inputcompra' type="text" value={userData.address || ''} onChange={(e) => handleInputChange('address', e.target.value)} placeholder="Dirección" required />
                    <input className='inputcompra' type="text" value={userData.ci || ''} onChange={(e) => handleInputChange('ci', e.target.value)} placeholder="Carnet de Identidad" required />
                    <select className='selectcompra' value={userData.gender || ''} onChange={(e) => handleInputChange('gender', e.target.value)} required>
                        <option value="" disabled>Selecciona tu género</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                    <input className='inputcompra' type="date" value={userData.birthday_date || ''} onChange={(e) => handleInputChange('birthday_date', e.target.value)} placeholder="Fecha de cumpleaños" required />
                    <input className='inputcompra' type="email" value={userData.email || ''} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="Email" required />
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
                    <button onClick={handlePaymentProceed} className={isDataComplete ? "button-enabled" : "button-disabled"} disabled={!isDataComplete}>
                        Proceder al Pago
                    </button>
                </div>
                <div className="map-container" ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
            </div>
            <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="colored" transition="Bounce" />
        </div>
    );
}
