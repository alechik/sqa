import React, {useState} from "react";
import { db} from "../../../../infraestructure/firebase-connection.js";
import {collection, addDoc} from "firebase/firestore";

export default function CrudCategoria(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        try {
            await addDoc(collection(db, "product_categories"), {
                name,
                description
            });
            alert('Category added successfully!');
            setName('');
            setDescription('');
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Failed to add category!');
        }
    };

    return (
        <form className='add-product-form' onSubmit={handleSubmit}>
            <h2 className='name'>Agregar Categoría</h2>
            <input
                type="text"
                name="name"
                placeholder="Nombre de la Categoría"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                name="description"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <button type="submit">Agregar Categoría</button>
        </form>
    );
}