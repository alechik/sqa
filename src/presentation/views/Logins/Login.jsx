import React, { useEffect, useState } from 'react';
import './Login.css';
import { TailSpin } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithRedirect,
    getRedirectResult
} from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { getUserProfile, createUser } from '../../../infraestructure/api/user';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getRedirectResult(auth).then(result => {
            if (result) {
                const user = result.user;
                manageUserProfile(user);
            } else {
                setLoading(false);
            }
        }).catch(error => {
            console.error("Redirect Auth Error:", error);
            toast.error(`Redirect Auth Error: ${error.message}`);
            setLoading(false);
        });
    }, []);

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const loginUser = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            await manageUserProfile(userCredential.user);
        } catch (error) {
            console.error("Login Error:", error);
            toast.error(`Login Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const manageUserProfile = async (user) => {
        if (!user) return;
        try {
            const userProfile = await getUserProfile(user.uid);
            if (!userProfile) {
                await createUser({
                    uid: user.uid,
                    email: user.email,
                    names: user.displayName || "",
                    avatar: user.photoURL || "",
                    gender: "",
                    numero: "",
                    birthday_date: "",
                    address: "",
                    ci: "",
                    userTypeId: '3' // Adjust as necessary
                });
                toast.success("New user profile created.");
            }
            navigate("/"); // Navigate to the main page
            window.location.reload();
        } catch (error) {
            console.error("Error managing user profile:", error);
            toast.error(`Error managing user profile: ${error.message}`);
        }
    };

    const handleSignInWithGoogle = () => {
        setLoading(true);
        signInWithRedirect(auth, new GoogleAuthProvider());
    };

    const handleSignInWithFacebook = () => {
        setLoading(true);
        signInWithRedirect(auth, new FacebookAuthProvider());
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
                    <button type="button" onClick={handleSignInWithGoogle} className="google-btn">
                        <FontAwesomeIcon icon={faGoogle} className="google-icon" />
                        <span className="btn-text">Google</span>
                    </button>
                    <button type="button" onClick={handleSignInWithFacebook} className="facebook-btn">
                        <FontAwesomeIcon icon={faFacebookF} className="facebook-icon" />
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

export default Login;
