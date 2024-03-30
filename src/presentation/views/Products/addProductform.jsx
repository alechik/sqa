import './addProductform.css';
import React, { useState, useEffect } from 'react';
import { createProduct } from '../../../infraestructure/api/product'; // Asegúrate de que la ruta sea correcta
import { storage, db } from '../../../infraestructure/firebase-connection';// Importa storage desde tu configuración de Firebase
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, getDocs } from 'firebase/firestore';


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
        if (!product.image) {
            alert('Por favor, selecciona una imagen para el producto.');
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
            console.log(productData)
            await createProduct({
                ...productData,
                pictures: imageUrl, // Asegúrate de que este campo coincide con lo esperado en Firestore y la clase Product
            }, product.image); // Considera si necesitas pasar realmente la imagen aquí, dado que ya has manejado la subida
            alert('Producto agregado con éxito');
            // Opcional: resetear el estado del formulario aquí
        } catch (error) {
            console.error('Error al agregar el producto:', error);
            alert('Error al agregar el producto. Por favor, revisa la consola para más detalles.');
        }
    };


    return (
        <form onSubmit={handleSubmit} className='add-product-form'>
            <input type="text" name="product_name" placeholder="Nombre del Producto" onChange={handleChange} required />
            <textarea name="description" placeholder="Descripción" onChange={handleChange} required />
            <select name="category_id" onChange={handleChange} required>
                <option value="">Categoria</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <input type="number" name="unitary_price" placeholder="Precio Unitario" onChange={handleChange} required />
            <input type="number" name="stock" placeholder="Stock" onChange={handleChange} required />
            <input type="number" name="gramaje" placeholder="Gramaje (g/m²)" onChange={handleChange} required />
            <input type="file" name="image" onChange={handleChange} required />
            <button type="submit">Agregar Producto</button>
        </form>
    );
}

export default AddProductForm;
