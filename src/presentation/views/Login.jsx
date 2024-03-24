import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    getAuth,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../infraestructure/firebase--config'; // Asegúrate de que esta ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

const CLIENT_USER_TYPE_ID = 'rxP2vj8KV3mt1Y5nMVrd'; 

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleError = (error) => {
        console.error("Error de inicio de sesión:", error.code);
        let errorMessage = '';
        switch (error.code) {
            case 'auth/account-exists-with-different-credential':
                errorMessage = 'Ya existe una cuenta con un método de inicio de sesión diferente.';
                break;
            case 'auth/email-already-in-use':
                errorMessage = 'El correo electrónico ya está en uso con otra cuenta.';
                break;
            case 'auth/wrong-password':
                errorMessage = 'La contraseña es incorrecta. Por favor, inténtalo de nuevo.';
                break;
            case 'auth/user-not-found':
                errorMessage = 'No se encontró una cuenta con este correo electrónico.';
                break;
            case 'auth/user-disabled':
                errorMessage = 'La cuenta ha sido deshabilitada. Contacta al soporte para más información.';
                break;
            case 'auth/too-many-requests':
                errorMessage = 'Hemos detectado demasiadas solicitudes desde tu dispositivo. Por favor, espera un momento e inténtalo de nuevo.';
                break;
            default:
                errorMessage = `Error al iniciar sesión. ${error.message}`;
                break;
        }
        setError(errorMessage);
    };


    const loginUser = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userDocRef = doc(db, "users", userCredential.user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userTypeDocRef = doc(db, "user_types", userDocSnap.data().userTypeId);
                const userTypeDocSnap = await getDoc(userTypeDocRef);

                if (userTypeDocSnap.exists()) {
                    const userType = userTypeDocSnap.data().name; // Suponiendo que cada tipo tiene un campo 'name'
                    // Decide a dónde redirigir basado en el tipo de usuario
                    switch (userType) {
                        case 'Cliente':
                            navigate('/');
                            break;
                        case 'Empleado':
                            navigate('/');
                            break;
                        case 'Administrador':
                            navigate('/');
                            break;
                        default:
                            navigate('/'); // Ruta por defecto si no se reconoce el tipo
                            break;
                    }
                } else {
                    setError("No se pudo determinar el tipo de usuario.");
                }
            } else {
                setError("No existe una cuenta asociada a este email.");
            }
        } catch (error) {
            handleError(error);
        }
    };


    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            // Verificar si el usuario ya existe en Firestore
            const userDocRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(userDocRef);

            if (!docSnap.exists()) {
                // Si el usuario no existe, lo creamos en Firestore
                await setDoc(userDocRef, {
                    email: user.email,
                    names: user.displayName || '',
                    avatar: user.photoURL || '',
                    userTypeId: CLIENT_USER_TYPE_ID // Este es el ID para un usuario cliente
                });
            }
            navigate('/Home'); // o la ruta que corresponda a tu aplicación
        } catch (error) {
            handleError(error);
        }
    };

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            // Verificar si el usuario ya existe en Firestore
            const userDocRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(userDocRef);

            if (!docSnap.exists()) {
                // Si el usuario no existe, lo creamos en Firestore
                await setDoc(userDocRef, {
                    email: user.email,
                    names: user.displayName || '',
                    avatar: user.photoURL || '',
                    userTypeId: CLIENT_USER_TYPE_ID // Este es el ID para un usuario cliente
                });
            }
            navigate('/Home'); // o la ruta que corresponda a tu aplicación
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <section className="login-container">
            <div className="login-box">
                <form onSubmit={loginUser}>
                    <h2>Iniciar sesión</h2>
                    {error && <div className="error-message">{error}</div>}
                    <div className={`input-box ${email ? 'active' : ''}`}>
                        <span className="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label>Email</label>
                    </div>
                    <div className={`input-box ${password ? 'active' : ''}`}>
                        <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <label>Contraseña</label>
                    </div>
                    <button type="submit" className="login-btn">Iniciar sesión</button>
                    <button type="button" onClick={signInWithGoogle} className="google-btn">
                        <FontAwesomeIcon icon={faGoogle} className="google-icon" />
                        <span className="btn-text">Google</span>
                    </button>
                    <button type="button" onClick={signInWithFacebook} className="facebook-btn">
                        <FontAwesomeIcon icon={faFacebookF} className="icon" />
                        <span className="btn-text">Facebook</span>
                    </button>
                    <div className="register-link">
                        <p>¿Aún no tienes una cuenta? <Link to="/registrarse">Registrarse</Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
}
