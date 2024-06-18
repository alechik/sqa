import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import { createUser } from "../../../infraestructure/api/user.js";
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import registroimagen from '../../assets/signup-image.jpg';

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

        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Ahora user.uid contiene el UID generado por Firebase Authentication
            await createUser({
                uid: user.uid,
                email,
                names: `${firstName} ${lastName}`,
                numero,
                address,
                gender: '',
                birthday_date: '',
                ci: '',
                avatar: '',
                userTypeId: CLIENT_USER_TYPE_ID,
            });

            toast.success("Registro exitoso!");
            navigate('/');
        } catch (error) {
            console.error('Error al registrar usuario:', error.message);
            toast.error(`Error al registrar usuario: ${error.message}`);
        }
    };

    return (
        <section className="signup">
            <div className="containere">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Registrarse</h2>
                        <form className="register-form" id="register-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className='labellr' htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input
                                    className='inputrl'
                                    type="text"
                                    autoComplete="nope"
                                    name="name"
                                    id="name"
                                    placeholder="Nombre"
                                    required
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className='labellr' htmlFor="lastname"><i className="zmdi zmdi-face"></i></label>
                                <input
                                    id="lastname"
                                    placeholder="Apellido"
                                    className='inputrl'
                                    type="text"
                                    name='lastname'
                                    autoComplete='nope'
                                    required
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className='labellr' htmlFor="direccion"><i className="zmdi zmdi-pin"></i></label>
                                <input
                                    className='inputrl'
                                    type="text"
                                    autoComplete='nope'
                                    id='direccion'
                                    name='direccion'
                                    placeholder="Direccion"
                                    required
                                    value={address}
                                    onChange={handleAddressChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className='labellr' htmlFor="numero"><i className="zmdi zmdi-phone"></i></label>
                                <input
                                    id='numero'
                                    name='numero'
                                    placeholder='Numero'
                                    className='inputrl'
                                    type="number"
                                    autoComplete='nope'
                                    required
                                    value={numero}
                                    onChange={handleNumberChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className='labellr' htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input
                                    id="email"
                                    placeholder="Email"
                                    className='inputrl'
                                    type="email"
                                    name='email'
                                    autoComplete='nope'
                                    required
                                    value={lastName}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className='labellr' htmlFor="contraseña"><i className="zmdi zmdi-lock"></i></label>
                                <input
                                    id='password'
                                    placeholder='Contraseña'
                                    name='pass'
                                    className='inputrl'
                                    type="password"
                                    autoComplete='nope'
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className='labellr' htmlFor="contraseña"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input
                                    id='confirmpassword'
                                    placeholder='Confirmar Contraseña'
                                    name='pass'
                                    className='inputrl'
                                    type="password"
                                    autoComplete='nope'
                                    required
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                            </div>
                            {!isPasswordMatch && isClicked && <p style={{ color: '#FFFF99' }}>Las contraseñas no coinciden</p>}
                            <div class="form-group form-button">
                                <input type="submit" disabled={!isPasswordMatch} name="signup" id="signup" class="form-submit" value="Registrarse" />
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img className='imgrl' src={registroimagen} alt="sing up image" /></figure>
                        <Link to="/login" className="signup-image-link">¿Ya tienes una cuenta? Iniciar sesión</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}