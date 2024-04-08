    import React, { useState, useEffect, useRef } from 'react';
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
        const mapRef = useRef(null);

        useEffect(() => {
            // Asigna la función initMap a window para hacerla globalmente accesible
            window.initMap = () => {
                const google = window.google; // Asegúrate de que google está definido
                const myLocation = { lat: -17.72213363647461, lng: -63.174591064453125 };
        
                const map = new google.maps.Map(mapRef.current, {
                    zoom: 14,
                    center: myLocation,
                });
        
                const marker = new google.maps.Marker({
                    position: myLocation,
                    map: map,
                    draggable: true,
                    title: "Arrástrame!",
                });
        
                google.maps.event.addListener(marker, 'dragend', () => {
                    const geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ location: marker.getPosition() }, (results, status) => {
                        if (status === "OK" && results[0]) {
                            const newAddress = results[0].formatted_address;
                            setUserData(prevUserData => ({
                                ...prevUserData, 
                                address: newAddress
                            }));
                            saveAddressToFirebase(newAddress);
                        } else {
                            toast.error('No se pudo obtener la dirección de la nueva ubicación.');
                        }
                    });
                });
            };
        
            // Función para cargar el script de Google Maps
            const loadGoogleMapScript = () => {
                if (!window.google) {
                    const script = document.createElement('script');
                    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDF8jKuen4pA9YJvZWBTLlIPOYpzgJ9i6E&libraries=places&callback=initMap`;
                    script.async = true;
                    script.defer = true;
                    document.body.appendChild(script);
                } else {
                    window.initMap(); // Si Google Maps ya está cargado, inicializa el mapa directamente
                }
            };
        
            if (user) {
                const userRef = doc(firestore, 'users', user.uid);
                getDoc(userRef).then(docSnap => {
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setUserData(data);
                        // Cualquier otra lógica que necesites ejecutar una vez que tengas los datos del usuario
                    }
                });
            } else {
                navigate('/login');
            }
        
            loadGoogleMapScript(); // Asegúrate de llamar a esta función para cargar el script
        }, [user, firestore, navigate]); // Dependencias del useEffect
        


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

        const saveAddressToFirebase = async (newAddress) => {
            if (!user) return;
            
            const userRef = doc(firestore, 'users', user.uid);
            try {
                await updateDoc(userRef, { address: newAddress });
                toast.success('Dirección actualizada y guardada correctamente!', {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            } catch (error) {
                console.error("Error al guardar la dirección: ", error);
                toast.error('Error al guardar la dirección.');
            }
        };
    
        return (
            <div className="toast">
            <div className="compra-container">
                <div className="user-info-form">
                <h2>Detalles del Cliente</h2>
                <p>Por favor, completa tu información para continuar con la compra:</p>
                    <input
                    className='inputcompra'
                        type="text"
                        value={userData.names || ''}
                        onChange={(e) => handleInputChange('names', e.target.value)}
                        placeholder="Nombre completo"
                        required
                    />
                    <input
                    className='inputcompra'
                        type="text"
                        value={userData.address || ''}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Dirección"
                        required
                    />
                    
                    <input
                    className='inputcompra'
                        type="text"
                        value={userData.ci || ''}
                        onChange={(e) => handleInputChange('ci', e.target.value)}
                        placeholder="Carnet de Identidad"
                        required
                    />

                    <select
                    className='selectcompra'
                        value={userData.gender || ''}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        required
                    >
                        <option value="" disabled>Selecciona tu género</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>

                    <input
                    className='inputcompra'
                        type="date"
                        value={userData.birthday_date || ''}
                        onChange={(e) => handleInputChange('birthday_date', e.target.value)}
                        placeholder="Fecha de cumpleaños"
                        required
                    />

                    <input
                    className='inputcompra'
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
        <div className="map-container" ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
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
