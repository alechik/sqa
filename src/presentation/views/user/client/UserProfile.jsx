import React, { Component } from 'react';
import { auth, db } from '../../../../infraestructure/firebase--config';
import { doc, getDoc } from "firebase/firestore";
import { TailSpin } from 'react-loader-spinner'; // Importar el spinner
import './user.css'; // Asegúrate de tener el archivo CSS en la ruta correcta

class UserInfo extends Component {
    state = {
        userData: null,
        isLoading: false,
        error: null,
    };

    componentDidMount() {
        this.authUnsub = auth.onAuthStateChanged(this.handleAuthChange);
    }

    componentWillUnmount() {
        this.authUnsub && this.authUnsub();
    }

    handleAuthChange = (user) => {
        if (user) {
            this.fetchUserData(user.uid);
        } else {
            this.setState({ userData: null, isLoading: false, error: 'El usuario no está autenticado.' });
        }
    };

    fetchUserData = async (uid) => {
        this.setState({ isLoading: true });
        const userRef = doc(db, 'users', uid);
        try {
            const docSnap = await getDoc(userRef);
            if (docSnap.exists()) {
                this.setState({ userData: docSnap.data(), isLoading: false });
            } else {
                this.setState({ error: 'No se encontró el documento.', isLoading: false });
            }
        } catch (error) {
            this.setState({ error: `Error al obtener el documento: ${error.message}`, isLoading: false });
        }
    };

    renderContent() {
        const { avatar, names, email } = this.state.userData || {};
        return (
            <>
                <h2 className='my'>Mi cuenta</h2>
                <div className={`avatar-container`}>
                    <img src={avatar || 'default-avatar.png'} alt='Perfil' className='avatar' />
                </div>
                <h1 className="name">{names || 'Nombre no disponible'}</h1>
                <p className="email">{email || 'Email no disponible'}</p>
            </>
        );
    }

    render() {
        const { isLoading, error } = this.state;

        if (isLoading) {
            return (
                <div className="loading-container">
                    <TailSpin color="#CD5454" height={50} width={50} />
                </div>
            );
        }
        if (error) {
            return <div className="error-container">{error}</div>;
        }

        return (
            
            <div className="profile-container"> 
                <div className="profile-card">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

export default UserInfo;
