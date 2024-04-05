import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct, getCategories } from '../../../infraestructure/api/product';
import { storage } from '../../../infraestructure/firebase-connection';// Importa storage desde tu configuración de Firebase
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './edditProductform.css'; // Asegúrate de que el archivo CSS existe y tiene los estilos apropiados

function EditProductForm() {
    const [product, setProduct] = useState({
        product_name: '',
        description: '',
        unitary_price: '',
        stock: '',
        category_id: '',
        gramaje: '',
        image: null, // Para el archivo de imagen
        imageUrl: '' // Para la URL de la vista previa de la imagen
    });
    const [categories, setCategories] = useState([]); // Estado para almacenar las categorías
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(productId);
        const fetchProductData = async () => {
            try {
                const data = await getProductById(productId);
                // Asume que 'data' tiene un campo 'imageUrl' con la URL de la imagen actual
                setProduct({
                    ...data,
                    CategoryID: data.CategoryID,
                    gramaje: data.gramaje,
                    imageUrl: data.imageUrl,
                });
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };


        const fetchCategoriesData = async () => {
            try {
                const categoriesData = await getCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchProductData();
        fetchCategoriesData();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image' && files) {
            const file = files[0];
            setProduct(prev => ({ ...prev, image: file }));
            setProduct(prev => ({ ...prev, imageUrl: URL.createObjectURL(file) }));
        } else {
            setProduct(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Initialize an object to collect the data you'll update
        let updatedData = { ...product };

        // Check if an image file was selected
        if (product.image instanceof File) {
            try {
                const imageRef = ref(storage, `products/${product.image.name}`);
                const uploadResult = await uploadBytes(imageRef, product.image);
                const imageUrl = await getDownloadURL(uploadResult.ref);

                // Add/Update imageUrl in the data to update
                updatedData.imageUrl = imageUrl;

                // Remove the File object from the data sent to Firestore
                delete updatedData.image;
            } catch (error) {
                console.error("Error uploading new image:", error);
                // Optionally handle the error, e.g., by showing a message to the user
                return; // Exit the function to avoid updating Firestore with incorrect data
            }
        }

        try {
            await updateProduct(productId, updatedData);
            navigate('/admin/crud-productos'); // Change to your actual route for the product list
        } catch (error) {
            console.error("Error updating product:", error);
            // Optionally handle the error, e.g., by showing a message to the user
        }
    };


    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="edit-product-form">
            <h2>Editar Producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="product_name">Nombre del Producto</label>
                    <input
                        id="product_name"
                        type="text"
                        name="product_name"
                        value={product.product_name || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="description">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="category_id">Categoría</label>
                    <select
                        id="CategoryID"
                        name="category_id"
                        value={product.category_id || ''}
                        onChange={handleChange}
                        required>

                        <option value="">Categoría</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="unitary_price">Precio Unitario</label>
                    <input
                        id="unitary_price"
                        type="number"
                        name="unitary_price"
                        value={product.unitary_price || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="stock">Stock</label>
                    <input
                        id="stock"
                        type="number"
                        name="stock"
                        value={product.stock || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="gramaje">Unidad de medida</label>
                    <select name="gramaje" id="gramaje" placeholder="Unidad de medida" value={product.gramaje} onChange={handleChange} required>
                        <option value="">Unidad de medida</option>
                        <option value="Litro">Litro</option>
                        <option value="Gramos">Gramos</option>
                        <option value="Kilogramos">Kilogramos</option>
                        <option value="Mililitros">Mililitros</option>
                        <option value="Piezas sueltas">Piezas sueltas</option>
                        <option value="Kit">Kit</option>
                        <option value="Metros">Metros</option>
                        <option value="Centímetros">Centímetros</option>
                    </select>
                </div>


                <img src={product.pictures} alt="Product" className="product-image" />

                <div className="form-field">
                    <label htmlFor="image">Imagen</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                    {product.imageUrl && (
                        <div className="image-preview">
                            <img src={product.imageUrl} alt="Vista previa" />
                        </div>
                    )}
                </div>

                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );

}

export default EditProductForm;
