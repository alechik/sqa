// SearchedProductCard.jsx
import React from 'react';
import './searchedproduct.css'; // Asegúrate de que el archivo CSS está correctamente vinculado

const SearchedProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="searched-product-card">
            <div className="product-image-container">
                <img
                    src={product.pictures || 'placeholder-image-url'}
                    alt={product.product_name}
                    className="product-imagene"
                />
            </div>
            <div className="product-info">
                <h2 className="product-name">{product.product_name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-category"><strong>Categoría:</strong> {product.category}</p>
                <p className="product-stock"><strong>Stock:</strong> {product.stock}</p>
                <p className="product-measurement-unit"><strong>Unidad de medida:</strong> {product.gramaje}</p>
                <p className="product-price"><strong>Precio:</strong> ${product.unitary_price}.00</p>
                <div className="product-actions">
                    <button className="add-to-cart" onClick={() => onAddToCart(product)}>Añadir al carrito</button>
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
    );
};

export default SearchedProductCard;
