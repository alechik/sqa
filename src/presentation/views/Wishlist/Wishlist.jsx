import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth, db } from "../../../infraestructure/firebase--config.js";
import {collection, getDoc, getDocs, query, where, doc as Doc} from "firebase/firestore";
import  './wishlist.css';

export default function Wishlist( {addtoCart}) {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Obtener el usuario actualmente logueado
        const currentUser = auth.currentUser;
        if (currentUser) {
            // Obtener la lista de deseos del usuario actual
            const fetchWishlist = async () => {
                try {
                    const q = query(collection(db, 'wishlist'), where('user_id', '==', currentUser.uid));
                    const snapshot = await getDocs(q);
                    const wishlistData = [];
                    for (const doc of snapshot.docs) {
                        const productId = doc.data().product_id;
                        // Consultar los detalles del producto en la colección "products"
                        const productRef = Doc(db, 'products', productId);
                        const productDoc = await getDoc(productRef);
                        if (productDoc.exists()) {
                            wishlistData.push({ id: doc.id, product: productDoc.data() });
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

    return (
        <>
            <ToastContainer position="bottom-right" autoClose={5000} newestOnTop />
            <section className="cart-items">
                <div className="cart-details">
                    <h2>Lista de deseos</h2>
                    {loading ? (
                        <p>Cargando productos...</p>
                    ) : error ? (
                        <p>Error al cargar la lista de deseos: {error}</p>
                    ) : wishlist.length === 0 ? (
                        <h3>No hay productos en la lista de deseos</h3>
                    ) : (
                        <div className="wishlist-items">
                            {wishlist.map((item) => (
                                <div key={item.id} className="cart-list product d_flex">
                                    <div className="product-info">
                                        <h3>{item.product.product_name}</h3>
                                        <p>{item.product.description}</p>
                                    </div>
                                    <div className="product-price">
                                        <p>Precio: ${item.product.unitary_price.toFixed(2)}</p>
                                        <button onClick={() => addtoCart(item.product)}> + </button>
                                    </div>
                                    {/* Agrega más detalles del producto según tus necesidades */}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
