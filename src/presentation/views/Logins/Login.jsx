import React, { useState, useEffect } from 'react';
import './Login.css';
import { TailSpin } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import {
    getAuth,
    signInWithRedirect,
    getRedirectResult,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { db } from '../../../infraestructure/firebase--config';
import { doc, getDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const loginUser = async (event) => {
        event.preventDefault();
        setLoading(true); 
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (!user) {
                throw new Error('No user data available after login.');
            }

            // Verificar si existe documento para el usuario
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);
            if (!userDocSnap.exists()) {
                toast.error("No existe una cuenta asociada a este email.", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }

            const userType = userDocSnap.data().userTypeId;
            toast.success("Inicio de sesión exitoso!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(false);
            navigate(`/?userType=${userType}`);  // Navegar basado en el tipo de usuario
        } catch (error) {
            setLoading(false); 
            handleError(error);
        }
        finally {
            setLoading(false); // Stop loading regardless of the outcome
        }
    };


    useEffect(() => {
        setLoading(true);
    getRedirectResult(auth)
        .then((result) => {
            if (result) {
                setLoading(false); 
                const user = result.user;
                toast.success(`Bienvenido/a ${user.displayName || 'Usuario'}`);
                navigate("/"); /// Redirige a la página principal tras un inicio de sesión exitoso
            }
        })
        .catch((error) => {
            toast.error("Error de autenticación: " + error.message);
        })
        .finally(() => setLoading(false));
}, [navigate, auth]);   

    const signInWithGoogleHandler = () => {
        setLoading(true);
        signInWithRedirect(auth, new GoogleAuthProvider());
    };

    const signInWithFacebookHandler = () => {
        setLoading(true);
        signInWithRedirect(auth, new FacebookAuthProvider());
    };

    const handleError = (error) => {
        console.error("Error de inicio de sesión:", error.code || error.message);
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
        toast.error(errorMessage, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    return (
        <section className="login-container">
            <ToastContainer />
            <div className="login-box">
                <form onSubmit={loginUser}>
                    <h2 className='Inicio'>Iniciar sesión</h2>
                    <div className={`input-box ${email ? 'active' : ''}`}>
                        <span className="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input
                            className='input'
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
                            className='input'
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
                        <FontAwesomeIcon icon={faFacebookF} className="faceook-icon" />
                        <span className="btn-text">Facebook</span>
                    </button>
                    <div className="register-link">
                        <p>¿Aún no tienes una cuenta? <Link to="/registrarse">Registrarse</Link></p>
                    </div>
                </form>
            </div>
            {loading && <div className="spinner-container">
                <TailSpin color="#00BFFF" height={50} width={50} />
            </div>}
        </section>
    );
}