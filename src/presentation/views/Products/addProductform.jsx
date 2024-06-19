import './addProductform.css';
import React, { useState, useEffect } from 'react';
import { createProduct } from '../../../infraestructure/api/product'; // Asegúrate de que la ruta sea correcta
import { storage, db } from '../../../infraestructure/firebase-connection';// Importa storage desde tu configuración de Firebase
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
    });
    const [categories, setCategories] = useState([]);

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

        // Validación adicional antes de enviar el formulario
        if (product.unitary_price <= 0 || product.unitary_price > 999999) {
            toast('El precio unitario debe ser mayor a 0 y no mayor a 999999.');
            return;
        }
        if (product.stock <= 0 || product.stock > 9999) {
            toast('El stock debe ser mayor a 0 y no mayor a 9999.');
            return;
        }
        if (product.product_name.length > 60) {
            toast('El nombre del producto no debe exceder los 60 caracteres.');
            return;
        }
        if (product.description.length > 2000) {
            toast('La descripción no debe exceder los 2000 caracteres.');
            return;
        }
        if (!product.image) {
            toast('Por favor, selecciona una imagen para el producto.');
            return;
        }

        const imageRef = ref(storage, `products/${product.image.name}`);
        const uploadResult = await uploadBytes(imageRef, product.image);
        const imageUrl = await getDownloadURL(uploadResult.ref);

        const productData = {
            ...product,
            CategoryID: product.category_id,
            unitary_price: Number(product.unitary_price),
            stock: Number(product.stock),
            gramaje: Number(product.gramaje),
        };

        try {
            await createProduct({
                ...productData,
                pictures: imageUrl, // Asegúrate de que este campo coincide con lo esperado en Firestore y la clase Product
            }, product.image); // Considera si necesitas pasar realmente la imagen aquí, dado que ya has manejado la subida
            toast('Producto agregado con éxito');
            // Opcional: resetear el estado del formulario aquí
            setProduct({
                product_name: '',
                description: '',
                unitary_price: '',
                stock: '',
                category_id: '',
                gramaje: '',
                image: null,
            });
        } catch (error) {
            console.error('Error al agregar el producto:', error);
            toast('Error al agregar el producto. Por favor, revisa la consola para más detalles.');
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
                maxLength="2000" 
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
                min="1" 
                max="999999" 
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
            <button type="submit">Agregar Producto</button>
            <ToastContainer/>
        </form>
    );
}

export default AddProductForm;
