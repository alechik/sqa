import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailInputClick = () => {
        if (email === '') {
            document.getElementById('email-label').classList.remove('active');
        } else {
            document.getElementById('email-label').classList.add('active');
        }
    };

    const handlePasswordInputClick = () => {
        if (password === '') {
            document.getElementById('password-label').classList.remove('active');
        } else {
            document.getElementById('password-label').classList.add('active');
        }
    };

    return (
        <section className="login-container">
            <div className="login-box">
                <form action="">
                    <h2>Iniciar sesión</h2>
                    <div className={`input-box ${email ? 'active' : ''}`}>
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                            onClick={handleEmailInputClick}
                        />
                        <label id="email-label">Email</label>
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
                            onClick={handlePasswordInputClick}
                        />
                        <label id="password-label">Contraseña</label>
                    </div>
                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" />Recuérdame
                        </label>
                        <a href="#">Olvide mi contraseña</a>
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
