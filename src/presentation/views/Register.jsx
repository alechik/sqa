import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import {createUser} from "../../infraestructure/api/user.js";

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);

        if (isClicked) {
            setIsPasswordMatch(event.target.value === confirmPassword);
        }
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);

        if (isClicked) {
            setIsPasswordMatch(event.target.value === password);
        }
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsClicked(true);

        if (password === confirmPassword) {
            try {
                await createUser({ firstName, lastName, email, password, address });
                navigate('/');
            } catch (error) {
                console.error('Error al registrar usuario:', error.message);
                // Maneja el error aquí, muestra un mensaje de error al usuario, por ejemplo
            }
        }

        setIsPasswordMatch(password === confirmPassword);
    };

    return (
        <section className="register-container">
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <h2>Registrarse</h2>
                    <div className={`input-box ${firstName ? 'active' : ''}`}>
                        <input
                            type="text"
                            autoComplete="nope"
                            required
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                        <label>Nombre</label>
                    </div>
                    <div className={`input-box ${lastName ? 'active' : ''}`}>
                        <input
                            type="text"
                            autoComplete='nope'
                            required
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                        <label>Apellido</label>
                    </div>
                    <div className={`input-box ${email ? 'active' : ''}`}>
                        <input
                            type="email"
                            autoComplete='nope'
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label>Email</label>
                    </div>
                    <div className={`input-box ${address ? 'active' : ''}`}>
                        <input
                            type="text"
                            autoComplete='nope'
                            required
                            value={address}
                            onChange={handleAddressChange}
                        />
                        <label>Dirección</label>
                    </div>
                    <div className={`input-box ${password ? 'active' : ''}`}>
                        <input
                            type="password"
                            autoComplete='nope'
                            required
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <label>Contraseña</label>
                    </div>
                    <div className={`input-box ${confirmPassword ? 'active' : ''}`}>
                        <input
                            type="password"
                            autoComplete='nope'
                            required
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        <label>Confirmar Contraseña</label>
                    </div>
                    {!isPasswordMatch && isClicked && <p style={{ color: '#FFFF99' }}>Las contraseñas no coinciden</p>}
                    <button type="submit" disabled={!isPasswordMatch}>Registrarse</button>
                    <div className="register-link">
                        <p>¿Ya tienes una cuenta? <Link to="/iniciarsesion">Iniciar sesión</Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
}