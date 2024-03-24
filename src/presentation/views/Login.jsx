import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../infraestructure/firebase--config'; // Asegúrate de que esta ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleError = (error) => {
        console.error("Error de inicio de sesión:", error.code);
        setError(`Error al iniciar sesión. ${error.message}`);
    };

    const saveUserData = async (user) => {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            await setDoc(userRef, {
                email: user.email,
                names: user.displayName || '',
                birtday: '',
                gender: '',
                // Agrega aquí más campos según necesites, por ejemplo:
                avatar: user.photoURL || '',
            });
        }
    };

    const loginUser = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            handleError(error);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            await saveUserData(result.user);
            navigate('/');
        } catch (error) {
            handleError(error);
        }
    };

    const signInWithFacebook = async () => {
        try {
            const provider = new FacebookAuthProvider();
            const result = await signInWithPopup(auth, provider);
            await saveUserData(result.user);
            navigate('/');
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
