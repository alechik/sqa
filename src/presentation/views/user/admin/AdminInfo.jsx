import React, { Component } from 'react';
import { auth, db } from '../../../../infraestructure/firebase--config'; // Asegúrate de que este archivo contiene tus exportaciones de Firebase
import { doc, getDoc } from "firebase/firestore";

class AdminInfo extends Component {
    state = {
        userData: null,
    };

    componentDidMount() {
        this.loadUserData();
    }

    loadUserData = async () => {
        const user = auth.currentUser;
        if (user) {
            const userRef = doc(db, 'users', user.uid); // Se usa doc y getDoc con el nuevo SDK de Firestore v9+
            try {
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    this.setState({ userData: docSnap.data() });
                } else {
                    console.log('No se encontró el documento!');
                }
            } catch (error) {
                console.log('Error al obtener el documento:', error);
            }
        } else {
            // El usuario no está autenticado
            console.log('El usuario no está autenticado.');
        }
    };

    render() {
        const { userData } = this.state;

        if (!userData) {
            return <div>Cargando...</div>;
        }

        // Desestructuramos los datos para facilitar su uso en el JSX
        const { avatar, names, email, gender, address, birthday_date, ci, userTypeID } = userData;

        return (
            <div className='user-profile-container'>
                <div className="user-cont">
                    <div className="user-image-cont">
                        <div className="user-image-div">
                            <img src={avatar || '/src/presentation/assets/user-profile.png'} alt='perfil' className='user-img' />
                        </div>
                        <div className="below-info">
                            <span className='user-info-name'>{names || 'Nombre no disponible'}</span>
                            <span className='user-info-email'>{email || 'Email no disponible'}</span>
                        </div>
                    </div>

                    <div className="user-info">
                        <div className="user-info-div">
                            <div className="stat">
                                <h4>Nombre: </h4>
                                <span className='user-info-span'>{names?.split(" ")[0] || 'Nombre'}</span>
                            </div>
                            <div className="stat">
                                <h4>Apellido: </h4>
                                <span>{names?.split(" ").slice(1).join(" ") || 'Apellido'}</span>
                            </div>
                            <div className="stat">
                                <h4>Fecha de Nacimiento: </h4>
                                <span>{birthday_date || ''}</span>
                            </div>
                        </div>
                        <div className="user-info-div">
                            <div className="stat">
                                <h4>Dirección: </h4>
                                <span>{address || ''}</span>
                            </div>
                            <div className="stat">
                                <h4>Correo Electrónico: </h4>
                                <span>{email || ''}</span>
                            </div>
                            <div className="stat">
                                <h4>Género: </h4>
                                <span>{gender || ''}</span>
                            </div>
                        </div>
                        <div className="user-info-div">
                            <div className="stat">
                                <h4>Carnet de Identidad: </h4>
                                <span>{ci || ''}</span>
                            </div>
                            <div className="stat">
                                <h4>Tipo de Usuario:</h4>
                                <span>{userTypeID || ''}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminInfo;
