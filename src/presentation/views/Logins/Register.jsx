import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { createUser } from "../../../infraestructure/api/user.js";
import { event } from 'jquery';

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

    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
    const handleAddressChange = (event) => setAddress(event.target.value);
    const handleNumberChange = (event) => setNumber(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setIsPasswordMatch(false);
            return;
        }

        try {
            await createUser({
                email,
                password,
                names: `${firstName} ${lastName}`, // Concatenación del nombre y apellido
                numero,
                address: '', // Dejar en blanco
                gender: '', // Dejar en blanco
                birthday_date: '', // Dejar en blanco
                ci: '', // Dejar en blanco
                avatar: '', // Dejar en blanco
                userTypeId: CLIENT_USER_TYPE_ID,
            });
            navigate('/'); 
        } catch (error) {
            console.error('Error al registrar usuario:', error.message);
            // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
        }
    };

    return (
        <section className="register-container">
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <h2 className='h2r'>Registrarse</h2>
                    <div className={`input-box ${firstName ? 'active' : ''}`}>
                        <input
                            className='input'
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
                            className='input' 
                            type="text"
                            autoComplete='nope'
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
                            autoComplete='nope'
                            required
                            value={address}
                            onChange={handleAddressChange}
                        />
                        <label>Dirección</label>
                    </div>
                    <div className={`input-box ${numero ? 'active' : ''}`}>
                        <input
                           className='input'
                            type="number"
                            autoComplete='nope'
                            required
                            value={numero}
                            onChange={handleNumberChange}
                        />
                        <label>Numero</label>
                    </div>
                    <div className={`input-box ${email ? 'active' : ''}`}>
                        <input
                            className='input'   
                            type="email"
                            autoComplete='nope'
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
                            autoComplete='nope'
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