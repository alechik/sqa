import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getProductCategoryById, updateProductCategory} from '../../../../infraestructure/api/product_category.js';
import {storage} from '../../../../infraestructure/firebase-connection.js'; // Importa storage desde tu configuración de Firebase
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import '../../Products/edditProductform.css';

function EditCategoryForm() {
    const [category, setCategory] = useState({
        description: '',
        name : '',
        picture: '',
        imageFile: null // Para el archivo de imagen cargado
    });
    const { categoryId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const fetchCategoryData = async () => {
            try {
                const data = await getProductCategoryById(categoryId);

                setCategory({
                    name: data.name || '',
                    description: data.description || '',
                    picture: data.picture || '' // Usa data.picture o una cadena vacía si es undefined
                });
            } catch (error) {
                console.error("Error fetching category data:", error);
            }
        };




        fetchCategoryData();

    }, [categoryId]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image' && files) {
            const file = files[0];
            setCategory(prev => ({ ...prev, imageFile: file, picture: URL.createObjectURL(file) }));
        } else {
            setCategory(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let updatedData = { ...category };

        if (category.picture instanceof File) {
            try {
                const imageRef = ref(storage, `category_images/${category.picture.name}`);
                const uploadResult = await uploadBytes(imageRef, category.picture);
                const imageUrl = await getDownloadURL(uploadResult.ref);
                updatedData.picture = imageUrl;
                delete updatedData.image;
            } catch (error) {
                console.error("Error uploading new image:", error);
                return;
            }
        } else {
            // Si no hay una nueva imagen seleccionada, elimina imageFile del objeto actualizado
            delete updatedData.imageFile;
        }

        try {
            await updateProductCategory(categoryId, updatedData);
            navigate('/admin/categoria'); // Cambia a tu ruta actual para la lista de categorías
        } catch (error) {
            console.error("Error updating category:", error);
        }
    };

    if (!category) {
        return <div>Cargando...</div>;
    }





    return (
        <div className="edit-product-form">
            <h2>Editar Categoria</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="name">Nombre del Producto</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={category.name || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="description">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        value={category.description || ''}
                        onChange={handleChange}
                        required
                        maxLength={350}
                    />
                </div>







                <img src={category.picture} alt="Categoria" className="product-imagess" />

                <div className="form-field">
                    <label htmlFor="image">Imagen</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        accept="image/*"
                        required
                    />
                    {category.picture && (
                        <div className="image-preview">
                            <img src={category.picture} alt="Vista previa" />
                        </div>
                    )}
                </div>

                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );

}

export default EditCategoryForm;
