import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { createUser } from "../../../infraestructure/api/user.js";

const CLIENT_USER_TYPE_ID = '3';

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        if (!validateEmail(newEmail)) {
            toast.error("Por favor ingresa un correo electrónico válido.");
        } else {
            setEmail(newEmail);
            toast.dismiss();
        }
    };
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        if (newPassword.length < 8 || !/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword) || !/[^A-Za-z0-9]/.test(newPassword)) {
            toast.error("La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y un símbolo.");
        } else {
            setPassword(newPassword);
            toast.dismiss();
        }
    };
    const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
    const handleAddressChange = (event) => setAddress(event.target.value);
    const handleNumberChange = (event) => setNumber(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setIsPasswordMatch(false);
            toast.error("Las contraseñas no coinciden.");
            return;
        }

        try {
            await createUser({
                email,
                password,
                names: `${firstName} ${lastName}`,
                numero,
                address, // Permitir dirección completa si es necesario
                gender: '', // Dejar en blanco
                birthday_date: '', // Dejar en blanco
                ci: '', // Dejar en blanco
                avatar: '', // Dejar en blanco
                userTypeId: CLIENT_USER_TYPE_ID,
            });
            navigate('/');
        } catch (error) {
            console.error('Error al registrar usuario:', error.message);
            toast.error("Error al registrar usuario: " + error.message);
        }
    };

    return (
        <section className="register-container">
             <ToastContainer position="buttom-right" autoClose={5000} />
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <h2 className='h2'>Registrarse</h2>
                    <div className={`input-box ${firstName ? 'active' : ''}`}>
                        <input
                            className='input'
                            type="text"
                            autoComplete="off"
                            required
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                        <label>Nombre</label>
                    </div>
                    <div className={`input-box ${lastName ? 'active' : ''}`}>
                        <input
                            className='input' 
                            type="text"
                            autoComplete='off'
                            required
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                        <label>Apellido</label>
                    </div>
                    <div className={`input-box ${address ? 'active' : ''}`}>
                        <input
                            className='input'
                            type="text"
                            autoComplete='off'
                            required
                            value={address}
                            onChange={handleAddressChange}
                        />
                        <label>Dirección</label>
                    </div>
                    <div className={`input-box ${numero ? 'active' : ''}`}>
                        <input
                           className='input'
                            type="text"
                            autoComplete='off'
                            required
                            value={numero}
                            onChange={handleNumberChange}
                        />
                        <label>Número</label>
                    </div>
                    <div className={`input-box ${email ? 'active' : ''}`}>
                        <input
                            className='input'   
                            type="email"
                            autoComplete='off'
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label>Email</label>
                    </div>
                    <div className={`input-box ${password ? 'active' : ''}`}>
                        <input
                            className='input'
                            type="password"
                            autoComplete='off'
                            required
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <label>Contraseña</label>
                    </div>
                    <div className={`input-box ${confirmPassword ? 'active' : ''}`}>
                        <input
                            className='input'
                            type="password"
                            autoComplete='off'
                            required
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        <label>Confirmar Contraseña</label>
                    </div>
                    {!isPasswordMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>}
                    <button type="submit" disabled={!isPasswordMatch}>Registrarse</button>
                    <div className="register-link">
                        <p>¿Ya tienes una cuenta? <Link to="/iniciarsesion">Iniciar sesión</Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
}
