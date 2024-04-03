import React, { Component } from 'react';
import { auth, db } from '../../../../infraestructure/firebase--config'; // Asegúrate de que este archivo contiene tus exportaciones de Firebase
import { doc, getDoc } from "firebase/firestore";

class UserInfo extends Component {
    state = {
        userData: null,
    };

    componentDidMount() {
        this.loadUserData();
    }

    loadUserData = async () => {
        const user = auth.currentUser;
        if (user) {
            const userRef = doc(db, 'users', user.uid);
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
            <div className="profile-container">
                <div className="profile-card">
                    <h2 className='my'>Mi cuenta</h2>
                    <div className="avatar-container">
                        <img src={avatar || 'default-avatar.png'} alt='Perfil' className='avatar' />
                    </div>
                    <h1 className="name">{names || 'Nombre no disponible'}</h1>
                    <p className="email">{email || 'Email no disponible'}</p>
                </div>
            </div>
        );
    }
}

export default UserInfo;
