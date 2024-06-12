import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from "../../../infraestructure/firebase--config.js";
import { collection, getDoc, getDocs, query, where, doc as Doc, deleteDoc, doc } from "firebase/firestore";
import './wishlist.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const theme = createTheme({
    components: {
        MuiCircularProgress: {
            styleOverrides: {
                colorSecondary: {
                    color: '#CD5454',
                }
            }
        }
    }
});

export default function Wishlist({ addtoCart }) {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            const fetchWishlist = async () => {
                try {
                    const q = query(collection(db, 'wishlist'), where('user_id', '==', currentUser.uid));
                    const snapshot = await getDocs(q);
                    const wishlistData = [];
                    for (const doc of snapshot.docs) {
                        const productId = doc.data().product_id;
                        const productRef = Doc(db, 'products', productId);
                        const productDoc = await getDoc(productRef);
                        if (productDoc.exists()) {
                            wishlistData.push({ id: doc.id, product: productDoc.data(), productId });
                        }
                    }
                    setWishlist(wishlistData);
                    setLoading(false);
                } catch (error) {
                    setError(error.message);
                    setLoading(false);
                }
            };
            fetchWishlist();
        }
    }, []);

    const removeFromWishlist = async (productId) => {
        try {
            const currentUser = auth.currentUser;
            if (currentUser) {
                const wishlistRef = collection(db, "wishlist");
                const q = query(wishlistRef, where("user_id", "==", currentUser.uid), where("product_id", "==", productId));
                const snapshot = await getDocs(q);
                if (!snapshot.empty) {
                    const docId = snapshot.docs[0].id;
                    await deleteDoc(doc(wishlistRef, docId));
                    toast.success("Producto eliminado de la lista de deseos");
                    const updatedWishlist = wishlist.filter((item) => item.productId !== productId);
                    setWishlist(updatedWishlist);
                } else {
                    toast.error("No se encontró el producto en la lista de deseos");
                }
            }
        } catch (error) {
            toast.error("Error al eliminar el producto de la lista de deseos");
            console.error(error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer position="bottom-right" autoClose={5000} newestOnTop />
            <section className="wishlist-section">
                <h2>Lista de deseos</h2>
                {loading ? (
                    <div className="loading">
                        <CircularProgress color="secondary" />
                    </div>
                ) : error ? (
                    <p className="error-message">Error al cargar la lista de deseos: {error}</p>
                ) : wishlist.length === 0 ? (
                    <h3>No hay productos en la lista de deseos</h3>
                ) : (
                    <div className="wishlist-grid">
                        {wishlist.map((item) => (
                            <div key={item.id} className="wishlist-card">
                                <img src={item.product.pictures} alt={item.product.product_name} className="product-imagess" />
                                <div className="product-details">
                                    <h3>{item.product.product_name}</h3>
                                    <p>{item.product.description}</p>
                                    <div className="price-and-add">
                                        <p className="product-price">Precio: ${parseFloat(item.product.unitary_price).toFixed(2)}</p>
                                        <button onClick={() => addtoCart(item.product)} className="add-to-cart-button">
                                            <FontAwesomeIcon icon={faCartPlus} /> Añadir al carrito
                                        </button>
                                    </div>
                                </div>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    className="wishlist-icon"
                                    onClick={() => removeFromWishlist(item.productId)}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </ThemeProvider>
    );
}
