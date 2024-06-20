import './addProductform.css';
import React, { useState, useEffect } from 'react';
import { createProduct } from '../../../infraestructure/api/product';
import { storage, db } from '../../../infraestructure/firebase-connection';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, getDocs } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';

function AddProductForm() {
    const [product, setProduct] = useState({
        product_name: '',
        description: '',
        unitary_price: '',
        stock: '',
        category_id: '',
        gramaje: '',
        image: null,
        costo_lote: '',  // Añadido campo costo_lote
    });
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            const querySnapshot = await getDocs(collection(db, "product_categories"));
            const categoriesData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
            }));
            setCategories(categoriesData);
        };

        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setProduct({ ...product, image: files[0] });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validación adicional antes de enviar el formulario
        if (product.unitary_price <= 0 || product.unitary_price > 999999) {
            toast('El precio unitario debe ser mayor a 0 y no mayor a 999999.');
            setLoading(false);
            return;
        }
        if (product.stock <= 0 || product.stock > 9999) {
            toast('El stock debe ser mayor a 0 y no mayor a 9999.');
            setLoading(false);
            return;
        }
        if (product.product_name.length > 60) {
            toast('El nombre del producto no debe exceder los 60 caracteres.');
            setLoading(false);
            return;
        }
        if (product.description.length > 500) {
            toast('La descripción no debe exceder los 500 caracteres.');
            setLoading(false);
            return;
        }
        if (!product.image) {
            toast('Por favor, selecciona una imagen para el producto.');
            setLoading(false);
            return;
        }
        if (product.costo_lote <= 0 || product.costo_lote > 9999999) {
            toast('El costo de lote debe ser mayor a 0 y menor a 9999999.');
            setLoading(false);
            return;
        }

        try {
            // Subir la imagen a Firebase Storage
            const imageRef = ref(storage, `products/${product.image.name}`);
            const uploadResult = await uploadBytes(imageRef, product.image);
            const imageUrl = await getDownloadURL(uploadResult.ref);

            const productData = {
                ...product,
                CategoryID: product.category_id,
                unitary_price: Number(product.unitary_price),
                stock: Number(product.stock),
                gramaje: product.gramaje,
                costo_lote: Number(product.costo_lote), // Asegúrate de que costo_lote sea un número
                pictures: imageUrl,
            };

            // Llamar a createProduct con los datos necesarios
            await createProduct(productData);

            toast('Producto agregado con éxito');
            setProduct({
                product_name: '',
                description: '',
                unitary_price: '',
                stock: '',
                category_id: '',
                gramaje: '',
                image: null,
                costo_lote: '',  // Restablecer campo costo_lote
            });
        } catch (error) {
            console.error('Error al agregar el producto:', error);
            toast('Error al agregar el producto. Por favor, revisa la consola para más detalles.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='add-product-form'>
            <h2 className='name'>Agregar Producto</h2>
            <input 
                type="text" 
                name="product_name" 
                placeholder="Nombre del Producto" 
                onChange={handleChange} 
                maxLength="60" 
                value={product.product_name} 
                required 
            />
            <textarea 
                name="description" 
                placeholder="Descripción" 
                onChange={handleChange} 
                maxLength="500" 
                value={product.description} 
                required 
            />
            <select name="category_id" onChange={handleChange} value={product.category_id} required>
                <option value="">Categoria</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <input 
                type="number" 
                name="unitary_price" 
                placeholder="Precio Unitario" 
                onChange={handleChange} 
                value={product.unitary_price} 
                min="0.00" 
                max="999999.99" 
                required 
            />
            <input 
                type="number" 
                name="stock" 
                placeholder="Stock" 
                onChange={handleChange} 
                value={product.stock} 
                min="1" 
                max="9999" 
                required 
            />
            <select name="gramaje" id="gramaje" onChange={handleChange} value={product.gramaje} required>
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
            <input 
                type="file" 
                name="image" 
                accept="image/*" 
                onChange={handleChange} 
                required 
            />
            <input
                type="number"
                name="costo_lote"
                placeholder="Costo de Lote"
                onChange={handleChange}
                value={product.costo_lote}
                required
            />
            <button type="submit" disabled={loading}>{loading ? 'Cargando...' : 'Agregar Producto'}</button>
            <ToastContainer/>
        </form>
    );
}

export default AddProductForm;
