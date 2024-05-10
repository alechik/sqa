import React, { useState, useEffect, useCallback } from 'react';
import { auth, db } from '../../../../infraestructure/firebase--config';
import {doc, getDoc, updateDoc} from "firebase/firestore";
import './admininfo.css'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default function AdminInfo() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [file, setFile] = useState(null);

    const handleImageSelect = event => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file.name);
            setFile(file);
        }
    };

    async function updateUserProfile(imageUrl) {
        const userRef = doc(db, 'users', auth.currentUser.uid);

        try {
            await updateDoc(userRef, {
                avatar: imageUrl
            });
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    }

    async function handleUpload() {
        if (!file) return;

        const storage = getStorage();
        const storageRef = ref(storage, 'profileImages/' + auth.currentUser.uid);

        try {
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            updateUserProfile(downloadURL);
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }


    const fetchUserData = useCallback(async () => {
        setLoading(true);
        const user = auth.currentUser;
        if (!user) {
            setError('El usuario no está autenticado.');
            setLoading(false);
            return;
        }
        try {
            const userRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(userRef);
            if (!docSnap.exists()) {
                setError('No se encontró el documento.');
                setLoading(false);
                return;
            }
            setUserData(docSnap.data());
        } catch (err) {
            setError(`Error al obtener el documento: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    const { avatar, names, email, gender, address, birthday_date, ci, userTypeID } = userData || {};

    return (
        <div
            className={`user-profile-container ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="user-cont">
                <div className="user-image-cont">
                    <div className={`user-image-div ${isHovered ? 'hovered' : ''}`}>
                        <img src={avatar || '/src/presentation/assets/usuario.png'} alt='perfil' className='user-img' />
                    </div>
                    <div className="below-info">
                        <span className='user-info-name'>{names || 'Nombre no disponible'}</span>
                        <span className='user-info-email'>{email || 'Email no disponible'}</span>
                    </div>
                </div>

                {/* Detailed User Info */}
                <div className="user-info">
                    <div className="user-info-div"> {/* It's better to use a grid layout for these infos for better alignment and responsiveness */}
                        <div className="stat">
                            <h4>Nombre:</h4>
                            <span>{names?.split(" ")[0] || 'Nombre'}</span>
                        </div>
                        <div className="stat">
                            <h4>Apellido:</h4>
                            <span>{names?.split(" ").slice(1).join(" ") || 'Apellido'}</span>
                        </div>
                        <div className="stat">
                            <h4>Fecha de Nacimiento:</h4>
                            <span>{birthday_date || ''}</span>
                        </div>
                        <div className="file-upload">
                            <button className="upload-btn" onClick={() => document.getElementById('file-input').click()}>Selec. Imagen</button>
                            <input id="file-input" type="file" accept="image/*" onChange={handleImageSelect} style={{ display: 'none' }} />
                            {selectedFile && <span>Archivo Seleccionado: {selectedFile}</span>}
                        </div>
                        <button onClick={handleUpload} className='upload-btn'>Subir Imagen</button>
                    </div>
                    {/* Repeat for other details */}
                </div>
            </div>
        </div>
    );
}
