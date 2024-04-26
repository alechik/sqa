// SearchesPage.jsx
import React, { useState, useEffect } from 'react';
import SearchedProductCard from './SearchedProductCard'; // Asegúrate de que la ruta de importación es correcta

export default function SearchesPage() {
    // Asumiendo que "searchedProducts" es un array de resultados de Fuse.js con la estructura { item: { ...datos del producto } }
    const [products, setProducts] = useState(() => {
        const storedProducts = sessionStorage.getItem("searchedProducts");
        return storedProducts ? JSON.parse(storedProducts).map(result => result.item) : [];
    });

    if (products.length === 0) return <div>No hay productos similares a tu búsqueda.</div>;

    const addToCart = (product) => {
        // Aquí la lógica para añadir al carrito
        console.log("Agregar al carrito:", product);
    };

    return (
        <div className="searches-page-container">
            {products.map((product, index) => (
                <SearchedProductCard
                    key={index} // Aquí es mejor usar un ID único si está disponible
                    product={product}
                    onAddToCart={addToCart}
                />
            ))}
        </div>
    );
}
