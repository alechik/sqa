import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Fuse from 'fuse.js';
import { db } from '../../infraestructure/firebase-connection';
import { collection, getDocs } from 'firebase/firestore';
import './Search.css';
import ProductPopup from './ofertas/ProductPopup'; // Asegúrate de que la ruta del import es correcta.
import { useNavigate } from 'react-router-dom';
import { useSearchedProducts } from '../../infraestructure/api/searchedproducts.jsx'; // Verifica la ruta

export default function Search({addtoCart}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [popupVisible, setPopupVisible] = useState(true);
    const searchContainerRef = useRef(null);
    const navigate = useNavigate();
    const { searchedProducts, setSearchedProducts } = useSearchedProducts();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setPopupVisible(false);
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
                setSearchedProducts([]);
                return;
            }
            console.log("Fetching data for term: ", searchTerm);
            setLoading(true);
            const productsSnapshot = await getDocs(collection(db, "products"));
            const products = productsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

            const fuseOptions = {
                includeScore: true,
                findAllMatches: true,
                keys: ["product_name", "name"]
            };

            const fuse = new Fuse(products, fuseOptions);
            const results = fuse.search(searchTerm.toLowerCase());
            console.log("Search results:", results.map(r => r.item));
            setSearchedProducts(results.map(result => result.item));
            setLoading(false);
            setPopupVisible(true); // Mostrar popup con resultados
        };

        fetchSearchResults();
    }, [searchTerm, setSearchedProducts]);

    const handleResultClick = async (result) => {
        setSelectedProduct(result);
        setPopupVisible(false); // Ocultar popup al seleccionar un producto
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    const handlePage = (event) => {
        if (event.key === 'Enter' && searchTerm.trim() !== '') {
            navigate(`/search`);
        }
    };

    return (
        <section className="search" ref={searchContainerRef}>
            <div className="search__container">
                <input
                    onKeyDown={handlePage}
                    className="search__input"
                    type="text"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onBlur={() => setPopupVisible(false)} // Ocultar popup al perder el foco
                    onFocus={() => setPopupVisible(true)} // Mostrar popup al ganar el foco
                />
                {loading && <div className="loader-container">Loading...</div>}
                {popupVisible && searchedProducts.length > 0 && (
                    <ul className={`search__results ${searchedProducts.length > 0 ? 'show' : ''}`}>
                        {searchedProducts.map((result) => (
                            <li
                                key={result.id}
                                className="result-item"
                                onMouseDown={() => handleResultClick(result)}
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
                />,
                document.body
            )}
        </section>
    );
}
