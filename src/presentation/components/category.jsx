import React, { useState, useEffect } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../../infraestructure/firebase--config.js";
import './category.css'; // Importa el archivo CSS con los estilos de categoría

const Category = ({ product, onClose, addToCart }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => {
        loadCategories();
        //checkIfInWishlist();
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
    };

    const handleAddToWishlist = async (productId) => {
        try {
            const user = auth.currentUser;
            const wishlistRef = collection(db, 'wishlist');
            const querySnapshot = await getDocs(query(wishlistRef, where('product_id', '==', productId), where('user_id', '==', user.uid)));
            
            if (querySnapshot.empty) {
                // Si el producto no está en la lista de deseos, agregarlo
                await addDoc(wishlistRef, {
                    product_id: productId,
                    user_id: user.uid
                });
                console.log('Producto agregado a la lista de deseos.');
            } else {
                // Si el producto está en la lista de deseos, eliminarlo
                const docToDelete = querySnapshot.docs[0];
                await deleteDoc(doc(wishlistRef, docToDelete.id));
                console.log('El producto eliminado de la lista de deseos.');
            }
            
            // Recargamos los datos del producto para ver si está en la lista de deseos
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
            // Actualizamos el estado del producto para reflejar si está en la lista de deseos o no
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

    return (
        <div>
            <ul className="category-list" id="djanrs">
                {categories.map(category => (
                    <li key={category.id}>
                        <a href="#" onClick={() => handleCategoryClick(category.id)}>
                            {category.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="product-popup">
                {selectedCategory && (
                    <h2>Productos de la categoría: {categories.find(cat => cat.id === selectedCategory)?.name}</h2>
                )}
                <div className="card-container">
                    {products.map(product => (
                        <div className="card" key={product.id}>
                            <img
                                src={product.pictures || 'src/presentation/assets/flash/flash-1.png'}
                                alt={product.product_name}
                                style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px', marginBottom: '20px' }}
                            />
                            <h3>{product.product_name}</h3>
                            <p><strong>Descripción:</strong> {product.description}</p>
                            <p><strong>Categoría:</strong> {product.category}</p>
                            <p><strong>Stock:</strong> {product.stock}</p>
                            <p><strong>Unidad de medida:</strong> {product.gramaje}</p>
                            <p><strong>Precio:</strong> ${product.unitary_price}.00</p>
                            <button className="add-to-cart" onClick={() => handleAddToWishlist(product.id)}>
                                {wishlistProducts.includes(product.id) ? 'Eliminar de la lista de deseos' : 'Agregar a la lista de deseos'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;






