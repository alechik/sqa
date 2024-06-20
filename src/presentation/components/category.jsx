import React, { useState, useEffect } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../../infraestructure/firebase--config.js";
import { useNavigate } from 'react-router-dom';
import './category.css';
import ProductPopup from './ofertas/ProductPopup.jsx';

const Category = (addtoCart) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        loadCategories();
    }, []);

    useEffect(() => {
        const unsubscribe = listenToWishlistChanges();
        return () => unsubscribe();
    }, []);

    const loadCategories = async () => {
        try {
            const categoriesCollection = collection(db, 'product_categories');
            const categoriesSnapshot = await getDocs(categoriesCollection);
            const categoriesData = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCategories(categoriesData);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const listenToWishlistChanges = () => {
        const user = auth.currentUser;
        if (!user) return () => { }; // No-op if no user is logged in
        const wishlistRef = collection(db, 'wishlist');
        return onSnapshot(query(wishlistRef, where('user_id', '==', user.uid)), snapshot => {
            const wishlistProductsData = snapshot.docs.map(doc => doc.data().product_id);
            setWishlistProducts(wishlistProductsData);
        });
    };

    const handleCategoryClick = async (categoryId) => {
        setSelectedCategory(categoryId);
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('CategoryID', '==', categoryId));
        const productsSnapshot = await getDocs(q);
        const productsData = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);

        // Desplazar la página hacia abajo
        const productPopup = document.querySelector('.product-popupp');
        productPopup.scrollIntoView({ behavior: 'smooth' });
    };

    const handleAddToWishlist = async (productId) => {
        const user = auth.currentUser;
        if (!user) {
            navigate('/login');
            return;
        }

        try {
            const wishlistRef = collection(db, 'wishlist');
            const querySnapshot = await getDocs(query(wishlistRef, where('product_id', '==', productId), where('user_id', '==', user.uid)));

            if (querySnapshot.empty) {
                await addDoc(wishlistRef, {
                    product_id: productId,
                    user_id: user.uid
                });
                console.log('Producto agregado a la lista de deseos.');
            } else {
                const docToDelete = querySnapshot.docs[0];
                await deleteDoc(doc(wishlistRef, docToDelete.id));
                console.log('El producto eliminado de la lista de deseos.');
            }

            loadProductData(productId);
        } catch (error) {
            console.error('Error adding/removing product to/from wishlist:', error);
        }
    };

    const loadProductData = async (productId) => {
        try {
            const user = auth.currentUser;
            const wishlistRef = collection(db, 'wishlist');
            const querySnapshot = await getDocs(query(wishlistRef, where('product_id', '==', productId), where('user_id', '==', user.uid)));
            const isInWishlist = !querySnapshot.empty;
            setProducts(products => products.map(p => {
                if (p.id === productId) {
                    return { ...p, isInWishlist };
                }
                return p;
            }));
        } catch (error) {
            console.error('Error checking wishlist:', error);
        }
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowPopup(true);
    };

    return (
        <div className="containerCat">
            <div className="categorypopup">
            <h2 className='tituloCat'>Categorias</h2>
                <div className="category-list" id="djanrs">
                    {categories.map(category => (
                        <div className='card-container-category' key={category.id} onClick={() => handleCategoryClick(category.id)}>
                            <img src={category.picture} alt="" />
                            <div className="card-category">
                                <div className="card-content-category">
                                    <h3>{category.name}</h3>
                                    <p className="ellipsis">{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="product-popupp">
                {selectedCategory && (
                    <h2>Productos de la categoría: {categories.find(cat => cat.id === selectedCategory)?.name}</h2>
                )}
                <div className="card-container">
                    {products.map(product => (
                        <div
                            className="card"
                            key={product.id}
                            onClick={() => handleProductClick(product)}
                        >
                            <img
                                src={product.pictures || 'src/presentation/assets/flash/flash-1.png'}
                                alt={product.product_name}
                                className='imgCategory'
                            />
                            <div className="card-content">
                                <h3>{product.product_name}</h3>
                                <p><strong>Precio:</strong> Bs {product.unitary_price}.00</p>
                                <p><strong>Estado:</strong> {product.state}</p>
                                <button className="add-to-cart" onClick={(e) => { e.stopPropagation(); handleAddToWishlist(product.id); }}>
                                    {wishlistProducts.includes(product.id) ? 'Eliminar de la lista de deseos' : 'Agregar a la lista de deseos'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {showPopup && (
                    <ProductPopup
                        addtoCart={addtoCart}
                        product={selectedProduct}
                        onClose={() => setShowPopup(false)}
                    />
                )}
            </div>
        </div>
    );
}

export default Category;