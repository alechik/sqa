import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../infraestructure/firebase--config.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setError('');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setError('');
    };

    const loginUser = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            console.error("Error de inicio de sesión:", error.code);
            setError('Error al iniciar sesión. Por favor, revisa tus credenciales e intenta de nuevo.');
        }
    };

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Verificar si el usuario ya existe en Firestore antes de intentar crear uno nuevo
            const userRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(userRef);

            if (!docSnap.exists()) {
                // Aquí puedes ajustar según los datos que desees almacenar
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    names: user.displayName,
                    // Añade aquí más campos según los datos disponibles y tus necesidades
                });
            }

            navigate('/'); // Redirigir al usuario después del inicio de sesión
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
            setError('Error al iniciar sesión con Google. Por favor, intenta de nuevo.');
        }
    };

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(userRef);

            if (!docSnap.exists()) {
                // Crear un documento para el usuario con la información obtenida
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    // Añadir más campos como se requiera
                });
            }

            navigate('/');
        } catch (error) {
            console.error("Error al iniciar sesión con Facebook: ", error);
            setError('Error al iniciar sesión con Facebook. Por favor, intenta de nuevo.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(email, password);
    };

    return (
        <section className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Iniciar sesión</button>
                    {/* Botón de inicio de sesión con Google */}
                    <button type="button" onClick={signInWithGoogle} className="google-btn">
                        <FontAwesomeIcon icon={faGoogle} className="google-icon" />
                        <span className="google-btn-text">Google</span>
                    </button>

                    <button className="facebook-btn" onClick={signInWithFacebook} >
                        <FontAwesomeIcon icon={faFacebookF} className="facebook-icon" />
                        <span className="facebook-btn-text">Facebook</span> 
                    </button>
                    <div className="register-link">
                        <p>¿Aún no tienes una cuenta? <Link to="/registrarse">Registrarse</Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
}
