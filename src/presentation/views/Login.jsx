import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { db } from '../../infraestructure/firebase--config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signInWithGoogle, signInWithFacebook } from '../../infraestructure/api/user'; 

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
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
            case 'auth/invalid-credential':
                errorMessage = 'La credencial proporcionada es inválida. Por favor, verifica tus datos e inténtalo de nuevo.';
                break;
            default:
                errorMessage = `Error al iniciar sesión. ${error.message}`;
                break;
        }
        setError(errorMessage);
        setShowError(true);
        setTimeout(() => setShowError(false), 5000); 
    };



    const loginUser = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userDocRef = doc(db, "users", userCredential.user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (!userDocSnap.exists()) {
                setError("No existe una cuenta asociada a este email.");
                return;
            }

            const userType = userDocSnap.data().userTypeId;
            switch (userType) {
                case '1': // ID para administrador
                    navigate('/admin-dashboard');
                    break;
                case '2': // ID para trabajador
                    navigate('/worker-dashboard');
                    break;
                case '3': // ID para cliente
                    navigate('/client-home');
                    break;
                default:
                    setError("Tipo de usuario no definido.");
                    navigate('/'); // Ruta por defecto
                    break;
            }
        } catch (error) {
            handleError(error);
        
        }
    };

    const signInWithGoogleHandler = async () => {
        try {
            await signInWithGoogle();
            navigate('/client-home');
        } catch (error) {
            setError(error.message); 
        }
    };

    const signInWithFacebookHandler = async () => {
        try {
            await signInWithFacebook();
            navigate('/client-home');
        } catch (error) {
            setError(error.message); // Actualiza el estado con el mensaje de error
        }
    };


    return (
        <section className="login-container">
            <div className="login-box">
                <form onSubmit={loginUser}>
                    <h2>Iniciar sesión</h2>
                    {showError && <div className="error-message">{error}</div>}
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
                    <button type="button" onClick={signInWithGoogleHandler} className="google-btn">
                        <FontAwesomeIcon icon={faGoogle} className="google-icon" />
                        <span className="btn-text">Google</span>
                    </button>
                    <button type="button" onClick={signInWithFacebookHandler} className="facebook-btn">
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
