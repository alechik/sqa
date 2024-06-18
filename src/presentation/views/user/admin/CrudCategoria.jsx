import React, { useState } from "react";
import { db, storage } from "../../../../infraestructure/firebase-connection.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import './crudCategoria.css'; // Asegúrate de crear este archivo CSS para tus estilos

export default function CrudCategoria() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setFile(file);
        } else {
            alert('Please upload a valid image file.');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (name.length > 15) {
            alert('El nombre no debe exceder los 15 caracteres.');
            return;
        }
        if (description.length > 250) {
            alert('La descripción no debe exceder los 250 caracteres.');
            return;
        }
        if (!file) {
            alert('Por favor, selecciona una imagen para la categoría.');
            return;
        }

        let pictureURL = '';
        if (file) {
            const fileRef = ref(storage, `category_images/${file.name}`);
            const snapshot = await uploadBytes(fileRef, file);
            pictureURL = await getDownloadURL(snapshot.ref);
        }

        try {
            await addDoc(collection(db, "product_categories"), {
                name,
                description,
                picture: pictureURL
            });
            alert('Categoría agregada con éxito!');
            setName('');
            setDescription('');
            setFile(null);
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error al agregar la categoría.');
        }
    };

    return (
        <form className='add-category-form' onSubmit={handleSubmit}>
            <h2 className='title'>Agregar Categoría</h2>
            <input
                type="text"
                name="name"
                placeholder="Nombre de la Categoría"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="15"
                required
            />
            <textarea
                name="description"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength="250"
                required
            />
            <input
                type="file"
                name="picture"
                onChange={handleFileChange}
                accept="image/*"
                required
            />
            <button type="submit">Agregar Categoría</button>
        </form>
    );
}
