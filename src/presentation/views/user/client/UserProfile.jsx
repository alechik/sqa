import React, { Component } from 'react';
import { auth, db } from '../../../../infraestructure/firebase--config';
import { doc, getDoc } from "firebase/firestore";
import './user.css'; // Asegúrate de tener el archivo CSS en la ruta correcta

class UserInfo extends Component {
    state = {
        userData: null,
        isLoading: true,
        error: null,
    };

    async componentDidMount() {
        const user = auth.currentUser;
        if (!user) {
            this.setState({ error: 'El usuario no está autenticado.', isLoading: false });
            return;
        }

        const userRef = doc(db, 'users', user.uid);
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
    }

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

        if (isLoading) return <div className="loading-container">Cargando...</div>;
        if (error) return <div className="error-container">{error}</div>;

        return (
            <div className="profile-container" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <div className="profile-card">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

export default UserInfo;
