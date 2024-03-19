import './addProductform.css';
import React, { useState } from 'react';
import { createProduct } from '../../infraestructure/api/product'; // Asegúrate de que la ruta sea correcta
import { storage } from '../../infraestructure/firebase-connection'; // Importa storage desde tu configuración de Firebase
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';



function AddProductForm() {
    const [product, setProduct] = useState({
        product_name: '',
        description: '',
        unitary_price: '',
        stock: '',
        image: null,
    });

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
            unitary_price: Number(product.unitary_price),
            stock: Number(product.stock),
            picture: imageUrl, // Usamos la URL de la imagen subida
        };

        try {
            await createProduct({
                // Asegúrate de pasar los campos del producto correctamente
                description: product.description,
                product_category_id: product.product_category_id, // Ajusta según sea necesario
                product_name: product.product_name,
                stock: product.stock,
                unitary_price: product.unitary_price,
            }, product.image); // Pasa el archivo de imagen aquí
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
            <input type="text" name="product_category_id" placeholder="ID de Categoría" onChange={handleChange} required />
            <input type="number" name="unitary_price" placeholder="Precio Unitario" onChange={handleChange} required />
            <input type="number" name="stock" placeholder="Stock" onChange={handleChange} required />
            <input type="file" name="image" onChange={handleChange} required />
            <button type="submit">Agregar Producto</button>
        </form>
    );
}

export default AddProductForm;
