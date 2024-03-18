import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../infraestructure/firebase--config';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Nuevo estado para manejar los mensajes de error
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setError(''); // Restablecer el mensaje de error cuando el usuario empieza a escribir
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setError(''); // Restablecer el mensaje de error cuando el usuario empieza a escribir
    };

    const loginUser = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
            navigate('/');
        } catch (error) {
            console.error("Error completo de inicio de sesión:", error.code);

            switch (error.code) {
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                case 'auth/invalid-email':
                case 'auth/invalid-credential': // Considera tratar este error de forma más genérica
                    setError('Correo electrónico o contraseña incorrecta. Por favor, inténtalo de nuevo.');
                    break;
                default:
                    setError('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        loginUser(email, password);
    };

    return (
        <section className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <h2>Iniciar sesión</h2>
                    {/* Mensaje de error */}
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
                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" />Recuérdame
                        </label>
                        <a href="#">Olvidé mi contraseña</a>
                    </div>
                    <button type="submit">Iniciar sesión</button>
                    <div className="register-link">
                        <p>¿Aún no tienes una cuenta? <Link to="/registrarse">Registrarse</Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
}
