import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { db } from '../../infraestructure/firebase-connection';
import { collection, getDocs } from 'firebase/firestore';
import './navbar.css';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedResultIndex, setSelectedResultIndex] = useState(-1);

    useEffect(() => {
        if (searchTerm !== '') {
            setLoading(true);
            const delayDebounce = setTimeout(async () => {
                try {
                    const productsSnapshot = await getDocs(collection(db, "products"));
                    const categoriesSnapshot = await getDocs(collection(db, "product_categories"));
                    
                    const products = productsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                    const categories = categoriesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                    
                    const fuseOptions = {
                        includeScore: true,
                        findAllMatches: true,
                        keys: ["product_name", "name"]
                    };
                    const fuse = new Fuse([...products, ...categories], fuseOptions);
                    const results = fuse.search(searchTerm.toLowerCase());
                    
                    setSearchResults(results.map(result => result.item));
                } catch (error) {
                    console.error("Error fetching search results: ", error);
                }
                setLoading(false);
            }, 300);
            return () => clearTimeout(delayDebounce);
        }
    }, [searchTerm]);

    const handleMouseEnter = (index) => {
        setSelectedResultIndex(index);
    };

    const handleMouseLeave = () => {
        setSelectedResultIndex(-1);
    };

    const handleResultClick = (result) => {
        // Lógica para manejar el clic en un resultado.
        // Por ejemplo, podrías redirigir al usuario a la página del producto o categoría.
        console.log("Clicked result:", result);
    };

    return (
        <section className="search">
            <div className="search__container">
                <input 
                    className="search__input" 
                    type="text" 
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {loading && <div>Loading...</div>}
                {searchResults.length > 0 && (
                    <ul className="search__results">
                        {searchResults.map((result, index) => (
                            <li 
                                key={result.id} 
                                className={`result-item ${index === selectedResultIndex ? 'selected' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleResultClick(result)}
                            >
                                {result.product_name || result.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}
