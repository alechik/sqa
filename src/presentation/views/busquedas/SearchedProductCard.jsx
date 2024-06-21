// SearchedProductCard.jsx
import React, { useState, useEffect } from 'react';
import ProductPopup from '../../components/ofertas/ProductPopup';
import { getProductCategoryById } from '../../../infraestructure/api/product_category'; // Importa la función para obtener la categoría
import './searchedproduct.css';

const SearchedProductCard = ({ product, addtoCart }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [categoryName, setCategoryName] = useState('');

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    useEffect(() => {
        const fetchCategoryName = async () => {
            try {
                const category = await getProductCategoryById(product.CategoryID);
                setCategoryName(category.name);
            } catch (error) {
                console.error("Error fetching category name:", error);
            }
        };

        fetchCategoryName();
    }, [product.CategoryID]);

    return (
        <>
            <div className="searched-product-card" onClick={openPopup}>
                <div className="product-image-container">
                    <img
                        src={product.pictures || 'placeholder-image-url'}
                        alt={product.product_name}
                        className="product-imagene"
                    />
                </div>
                <div className="product-info">
                    <h2 className="product-name">{product.product_name}</h2>
                    <p className="product-description">{product.description.length > 250 ? product.description.substring(0, 250) + '...' : product.description}</p>
                    <p className="product-category"><strong>Categoría:</strong> {categoryName}</p>
                    <p className="product-stock"><strong>Stock:</strong> {product.stock}</p>
                    <p className="product-measurement-unit"><strong>Unidad de medida:</strong> {product.gramaje}</p>
                    <p className="product-price"><strong>Precio:</strong> Bs {product.unitary_price}.00</p>
                    <div className="product-actions">
                        <button className="add-to-cart" onClick={(e) => { e.stopPropagation(); addtoCart(product); }}>Añadir al carrito</button>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=URL_DEL_PRODUCTO`} target="_blank" rel="noopener noreferrer" className="social-button share-facebook">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href={`https://twitter.com/intent/tweet?text=Descubre este producto ${product.product_name}&url=URL_DEL_PRODUCTO`} target="_blank" rel="noopener noreferrer" className="social-button share-twitter">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href={`https://wa.me/?text=Estoy interesado en el producto ${product.product_name}`} target="_blank" rel="noopener noreferrer" className="social-button ask-on-whatsapp">
                            <i className="fab fa-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <ProductPopup product={product} onClose={closePopup} addtoCart={addtoCart} />
            )}
        </>
    );
};

export default SearchedProductCard;
