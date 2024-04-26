import  { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Fuse from 'fuse.js';
import { db } from '../../infraestructure/firebase-connection';
import { collection, getDocs } from 'firebase/firestore';
import './Search.css';
import ProductPopup from './ofertas/ProductPopup'; // Asegúrate de que la ruta del import es correcta.
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const searchContainerRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        // Listener para clicks fuera del componente
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setSearchResults([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (searchTerm.trim() === '') {
                setSearchResults([]);
                return;
            }

            setLoading(true);
            const productsSnapshot = await getDocs(collection(db, "products"));
            //const categoriesSnapshot = await getDocs(collection(db, "product_categories"));

            const products = productsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            //const categories = categoriesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

            const fuseOptions = {
                includeScore: true,
                findAllMatches: true,
                keys: ["product_name", "name"]
            };

            const fuse = new Fuse(products, fuseOptions);
            const results = fuse.search(searchTerm.toLowerCase());
            sessionStorage.setItem("searchedProducts",JSON.stringify(results))
            setSearchResults(results.map(result => result.item));
            setLoading(false);
        };

        const delayDebounce = setTimeout(() => {
            fetchSearchResults();
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    const handleResultClick = async (result) => {
        setSelectedProduct(result);
        setSearchResults([]);
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    const handlePage=(event)=>{
        if (event.key === 'Enter' && searchTerm.trim() !== '') {
            navigate(`/search`);
        }
    }

    return (
        <section className="search" ref={searchContainerRef}>
            <div className="search__container">
                <input 
                    onKeyDown={handlePage}
                    className="search__input" 
                    type="text" 
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {loading && <div className="loader-container">Loading...</div>}
                {searchResults.length > 0 && (
                    <ul className="search__results">
                        {searchResults.map((result) => (
                            <li 
                                key={result.id} 
                                className="result-item"
                                onClick={() => handleResultClick(result)}
                            >
                                {result.product_name || result.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {selectedProduct && ReactDOM.createPortal(
                <ProductPopup
                    product={selectedProduct}
                    onClose={handleClosePopup}
                    // addtoCart={addtoCart} // Implementa esta función según sea necesario
                />,
                document.body
            )}
        </section>
    );
}
