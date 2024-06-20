import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct, getCategories } from '../../../infraestructure/api/product';
import { storage } from '../../../infraestructure/firebase-connection';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './edditProductform.css';

function EditProductForm() {
    const [product, setProduct] = useState({
        product_name: '',
        description: '',
        unitary_price: '',
        stock: '',
        CategoryID: '',
        gramaje: '',
        image: null,
        imageUrl: ''
    });
    const [categories, setCategories] = useState([]);
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const data = await getProductById(productId);
                setProduct({
                    ...data,
                    unitary_price: data.unitary_price.toString(),
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
            const fileExtension = file.name.split('.').pop().toLowerCase();
            if (!['png', 'jpg', 'jpeg'].includes(fileExtension)) {
                alert('Solo se aceptan imágenes en formato PNG, JPG o JPEG.');
                return;
            }
            if (file.size > 5000000) { // 5MB limit
                alert('El archivo no debe superar los 5MB.');
                return;
            }
            setProduct(prev => ({ ...prev, image: file, imageUrl: URL.createObjectURL(file) }));
        } else {
            if ((name === 'unitary_price' || name === 'stock') && parseFloat(value) < 0) {
                alert('El valor no puede ser negativo.');
                return;
            }
            if (name === 'unitary_price' && value.includes('.') && value.split('.')[1].length > 2) {
                alert('Por favor, introduce solo hasta dos decimales en el precio.');
                return;
            }
            if ((name === 'product_name' && value.length > 100) || (name === 'description' && value.length > 500)) {
                alert('Has excedido la longitud máxima permitida para este campo.');
                return;
            }
            setProduct(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { date_added, image, imageUrl, ...updatedData } = product;
        updatedData.unitary_price = updatedData.unitary_price.toString();

        if (product.image instanceof File) {
            try {
                const imageRef = ref(storage, `products/${product.image.name}`);
                const uploadResult = await uploadBytes(imageRef, product.image);
                updatedData.pictures = await getDownloadURL(uploadResult.ref);
            } catch (error) {
                console.error("Error uploading new image:", error);
                return;
            }
        }

        try {
            await updateProduct(productId, updatedData);
            navigate('/admin/crud-productos');
        } catch (error) {
            console.error("Error updating product:", error);
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
                        maxLength="60" // Limit to 100 characters
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
                        maxLength="500" // Limit to 500 characters
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="CategoryID">Categoría</label>
                    <select
                        id="CategoryID"
                        name="CategoryID"
                        value={product.CategoryID || ''}
                        onChange={handleChange}
                        required>
                        <option value="">Selecciona una categoría</option>
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
                        onInput={(e) => {
                            if (e.target.value.length > 5) {
                                e.target.value = e.target.value.slice(0, 5);
                            }
                        }}
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
                        onInput={(e) => {
                            if (e.target.value.length > 4) {
                                e.target.value = e.target.value.slice(0, 4);
                            }
                        }}
                        required
                        min="0" // No negative numbers
                        max="9999" // Maximum reasonable stock
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="gramaje">Unidad de medida</label>
                    <select
                        name="gramaje"
                        id="gramaje"
                        value={product.gramaje || ''}
                        onChange={handleChange}
                        required>
                        <option value="">Selecciona una unidad</option>
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
                <img src={product.pictures} alt="Product" className="product-images" />
                <div className="form-field">
                    <label htmlFor="image">Imagen</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*" 
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
