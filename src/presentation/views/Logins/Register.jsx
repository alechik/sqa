import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import { createUser } from "../../../infraestructure/api/user.js";
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import registroimagen from '../../assets/signup-image.jpg';

const CLIENT_USER_TYPE_ID = '3';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const NAME_REGEX = /^[a-zA-Z ]+$/;
    
export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
    const handleNumberChange = (event) => setNumber(event.target.value);

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!firstName.match(NAME_REGEX) || firstName.length < 2 || firstName.length > 50) {
            errors.firstName = 'El nombre debe tener entre 2 y 50 caracteres y solo puede contener letras';
            isValid = false;
        }

        if (!lastName.match(NAME_REGEX) || lastName.length < 2 || lastName.length > 50) {
            errors.lastName = 'El apellido debe tener entre 2 y 50 caracteres y solo puede contener letras';
            isValid = false;
        }

        if (!email.match(EMAIL_REGEX)) {
            errors.email = 'Ingrese un correo electrónico válido';
            isValid = false;
        }

        if (!password.match(PASSWORD_REGEX)) {
            errors.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial';
            isValid = false;
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = 'Las contraseñas no coinciden';
            isValid = false;
        }

        if (numero.length !== 8 || isNaN(numero)) {
            errors.numero = 'El número de teléfono debe tener 8 dígitos numéricos';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
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
        }
    };

    return (
        <section className="signup">
            <div className="containere">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Registrarse</h2>
                        <form className="register-form" id="register-form" onSubmit={handleSubmit} noValidate>
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
                                    maxLength={50}
                                    minLength={2}
                                    pattern={NAME_REGEX}
                                    title="El nombre solo puede contener letras"
                                />
                                <span className={`error ${formErrors.firstName ? 'active' : ''}`}>
                                    {formErrors.firstName || ''}
                                </span>
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
                                    maxLength={50}
                                    minLength={2}
                                    pattern={NAME_REGEX}
                                    title="El apellido solo puede contener letras"
                                />
                                <span className={`error ${formErrors.lastName ? 'active' : ''}`}>
                                    {formErrors.lastName || ''}
                                </span>
                            </div>
                            <div className="form-group">
                                <label className='labellr' htmlFor="numero"><i className="zmdi zmdi-phone"></i></label>
                                <input
                                    id='numero'
                                    name='numero'
                                    placeholder='Numero'
                                    className='inputrl'
                                    type="text"
                                    autoComplete='nope'
                                    required
                                    value={numero}
                                    onChange={handleNumberChange}
                                    maxLength={8}
                                    minLength={8}
                                    pattern="[0-9]*"
                                    title="El número de teléfono debe tener 8 dígitos numéricos"
                                />
                                <span className={`error ${formErrors.numero ? 'active' : ''}`}>
                                    {formErrors.numero || ''}
                                </span>
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
                                    value={email}
                                    onChange={handleEmailChange}
                                    pattern={EMAIL_REGEX}
                                    title="Ingrese un correo electrónico válido"
                                />
                                <span className={`error ${formErrors.email ? 'active' : ''}`}>
                                    {formErrors.email || ''}
                                </span>
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
                                    pattern={PASSWORD_REGEX}
                                    title="La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
                                />
                                <span className={`error ${formErrors.password ? 'active' : ''}`}>
                                    {formErrors.password || ''}
                                </span>
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
                                    pattern={PASSWORD_REGEX}
                                    title="La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
                                />
                                <span className={`error ${formErrors.confirmPassword ? 'active' : ''}`}>
                                    {formErrors.confirmPassword || ''}
                                </span>
                            </div>
                            {!isPasswordMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>}
                            <div className="form-group form-button">
                                <input type="submit" disabled={!isPasswordMatch} name="signup" id="signup" className="form-submit" value="Registrarse" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img className='imgrl' src={registroimagen} alt="sing up image" /></figure>
                        <Link to="/login" className="signup-image-link">¿Ya tienes una cuenta? Iniciar sesión</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}