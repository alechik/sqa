import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import "./compra.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


export default function Compra({ cartItems }) {
    const [userData, setUserData] = useState({});
    const [isDataComplete, setIsDataComplete] = useState(false);
    const auth = getAuth();
    const firestore = getFirestore();
    const navigate = useNavigate();
    const user = auth.currentUser;
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        if (!user) {
            toast.error('Por favor, inicia sesión para continuar.');
            navigate('/login');
            return;
        }

        const userRef = doc(firestore, 'users', user.uid);
        getDoc(userRef).then(docSnap => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setUserData(data);
                checkDataCompletion(data);
                loadGoogleMapScript().then(() => {
                    initMap(data.address);
                });
            } else {
                toast.error('Datos de usuario no encontrados.');
                navigate('/login');
            }
        });
    }, [user, firestore, navigate]);

    useEffect(() => {
        if (map && marker && userData.address) {
            updateMapLocation(userData.address);
            marker.addListener('dragend', handleMarkerDragEnd);
        }
        return () => {
            if (marker) {
                window.google.maps.event.clearListeners(marker, 'dragend');
            }
        };
    }, [map, marker, userData.address]);

    const loadGoogleMapScript = () => {
        return new Promise((resolve) => {
            if (window.google && window.google.maps) {
                resolve();
            } else {
                const scriptId = 'google-maps-script';
                let script = document.getElementById(scriptId);
                if (!script) {
                    script = document.createElement("script");
                    script.id = scriptId;
                    script.src =  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDF8jKuen4pA9YJvZWBTLlIPOYpzgJ9i6E&libraries=places&callback=initMap";
                    script.async = true;
                    script.defer = true;
                    document.head.appendChild(script);
                    script.onload = () => resolve();
                } else {
                    script.onload = () => resolve();
                }
            }
        });
    };

    const initMap = (address) => {
        if (window.google && window.google.maps && mapRef.current && !map) {
            const mapOptions = {
                zoom: 13,
                center: new window.google.maps.LatLng(-17.72213363647461, -63.174591064453125)
            };
            const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
            setMap(newMap);
    
            const newMarker = new window.google.maps.Marker({
                map: newMap,
                draggable: true,
                position: newMap.getCenter(),
                title: "Arrastrar para actualizar la dirección"
            });
            setMarker(newMarker);
    
            newMarker.addListener('dragend', handleMarkerDragEnd);
    
            if (address) {
                updateMapLocation(address);
            }
        }
    };

    const updateMapLocation = (address) => {
        if (map && marker) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {
                if (status === 'OK') {
                    map.setCenter(results[0].geometry.location);
                    marker.setPosition(results[0].geometry.location);
                } else {
                    console.error("Failed to geocode address.");
                }
            });
        }
    };

    const handleMarkerDragEnd = () => {
        if (marker) {
            const newPos = marker.getPosition();
            geocodePosition(newPos);
        }
    };

    const geocodePosition = (pos) => {
        if (map) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: pos }, async (results, status) => {
                if (status === 'OK' && results[0]) {
                    const updatedAddress = results[0].formatted_address;
                    setUserData(prevState => ({
                        ...prevState,
                        address: updatedAddress
                    }));
                    await updateUserDataInFirestore(updatedAddress);
                    toast.success(`Dirección actualizada: ${updatedAddress}`);
                } else {
                    toast.error('No se pudo obtener la dirección.');
                }
            });
        }
    };

    const updateUserDataInFirestore = async (address) => {
        if (user) {
            const userRef = doc(firestore, 'users', user.uid);
            try {
                await updateDoc(userRef, { address });
                toast.success('Dirección guardada en tu perfil!');
            } catch (error) {
                toast.error('Error al guardar la dirección.');
                console.error("Error al actualizar la dirección del usuario en Firestore: ", error);
            }
        }
    };

    const checkDataCompletion = (data) => {
        const requiredFields = ['address', 'birthday_date', 'ci', 'email', 'names'];
        const isComplete = requiredFields.every(field => data[field]);
        setIsDataComplete(isComplete);
    };

    const validateAllInputs = (data) => {
        const { names, address, ci, numero, email, birthday_date } = data;
        let isValid = true;

        const lettersAndSpacesRegex = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ.,'-]+$/;

        if (!lettersAndSpacesRegex.test(names) || names.length > 100) {
            toast.error('El nombre completo solo puede contener letras y debe ser menor de 100 caracteres.');
            isValid = false;
        }
        if (address.length > 255) {
            toast.error('La dirección debe ser menor de 255 caracteres.');
            isValid = false;
        }
        if (!/^\d+$/.test(ci) || ci.length < 6 || ci.length > 10) {
            toast.error('El CI debe contener solo dígitos y tener entre 6 y 10 caracteres.');
            isValid = false;
        }
        if (!/^\d{8}$/.test(numero)) {
            toast.error('El número de teléfono debe contener solo dígitos y tener exactamente 8 caracteres.');
            isValid = false;
        }
        if (email.length > 100 || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            toast.error('El email debe ser válido y no exceder los 100 caracteres.');
            isValid = false;
        }
        if (!isAdult(new Date(birthday_date))) {
            toast.error('Debes ser mayor de 18 años para realizar una compra.');
            isValid = false;
        }

        return isValid;
    };

    const isAdult = (birthdate) => {
        const today = new Date();
        const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        return birthdate <= eighteenYearsAgo;
    };

    const handleInputChange = (field, value) => {
        setUserData({ ...userData, [field]: value });
        if (field === 'address') {
            updateMapLocation(value);
        }
    };

    const handleSaveData = async () => {
        if (validateAllInputs(userData)) {
            const userRef = doc(firestore, 'users', user.uid);
            try {
                await updateDoc(userRef, userData);
                toast.success('Datos actualizados correctamente!');
            } catch (error) {
                toast.error('Error al guardar los datos.');
                console.error("Error updating user data in Firestore: ", error);
            }
        }
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

    useEffect(() => {
        return () => {
            if (map) {
                window.google.maps.event.clearInstanceListeners(map);
            }
            const script = document.querySelector('script[src^="https://maps.googleapis.com"]');
            if (script) {
                script.remove();
            }
        };
    }, []);


    return (
        <div className="toast">
        <div className="compra-container">
        <div className="user-info-form">
                <h2>Detalles del Cliente</h2>
                <p>Por favor, completa tu información para continuar con la compra:</p>
                <input className='inputcompra' type="text" value={userData.names || ''} onChange={(e) => handleInputChange('names', e.target.value)} placeholder="Nombre completo" required />
                <input className='inputcompra' type="text" value={userData.address || ''} onChange={(e) => handleInputChange('address', e.target.value)} placeholder="Dirección" required />
                <input className='inputcompra' type="text" value={userData.ci || ''} onChange={(e) => handleInputChange('ci', e.target.value)} placeholder="Carnet de Identidad" required />
                <input className='inputcompra' type="text" pattern="[0-9]*" value={userData.numero || ''} onChange={(e) =>  handleInputChange('numero', e.target.value)} placeholder="Numero" required />
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
                        <img src={item.pictures} alt={item.id} className="product-imagenn" />
                        <div>
                            <h4>{item.product_name}</h4>
                            <p>Cantidad: {item.qty}</p>
                            <p>Precio: Bs {parseFloat(item.unitary_price).toFixed(2)}</p>
                            <p>Subtotal: Bs {parseFloat(item.qty * item.unitary_price).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
                <h3>Total a pagar: Bs {totalPrice.toFixed(2)}</h3>
                <button onClick={handlePaymentProceed} className={isDataComplete ? "button-enabled" : "button-disabled"} disabled={!isDataComplete}>
                    Proceder al Pago
                </button>
            </div>
            <div className="map-container" ref={mapRef} style={{ height: '400px', width: '90%', borderRadius: "10px", marginLeft: '20px' }}>
            </div>
        </div>
        <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={true} theme="colored" />
    </div>
    );
}