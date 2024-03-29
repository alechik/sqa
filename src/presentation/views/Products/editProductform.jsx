// EditProductForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../../../infraestructure/api/product';
import './edditProductform.css';

function EditProductForm() {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const data = await getProductById(productId);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product data:", error);
                // Manejo opcional de errores, como establecer un estado de error o redirigir
            }
        };

        fetchProductData();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(productId, product);
            navigate('/product-list'); // Cambiar a tu ruta real de lista de productos
        } catch (error) {
            console.error("Error updating product:", error);
            // Manejo opcional de errores
        }
    };

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="edit-product-form">
            <h2>Editar Producto</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="product_name">Nombre del Producto</label>
                <input
                    id="product_name"
                    name="product_name"
                    value={product.product_name || ''}
                    onChange={handleChange}
                    required
                />
                {/* Repite esto para cada campo del producto que quieras editar */}
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
}

export default EditProductForm;
