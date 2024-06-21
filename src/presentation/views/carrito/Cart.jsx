import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import './cart.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Cart({ updateCartItem, removeCartItem, decreaseQty }) {
    const [cartItems, setCartItems] = useState(() => {
        // Intentamos cargar el carrito desde localStorage al iniciar el componente
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];
    });
    const navigate = useNavigate();
    const auth = getAuth();
    const [user, setUser] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Observa los cambios en el estado de autenticación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleIncrease = (item) => {
        const newItem = { ...item, qty: item.qty + 1 };
        const newCartItems = cartItems.map(cartItem => cartItem.id === item.id ? newItem : cartItem);
        setCartItems(newCartItems);
        updateCartItem(newItem);
    };

    const handleDecrease = (item) => {
        if (item.qty > 1) {
            const newItem = { ...item, qty: item.qty - 1 };
            const newCartItems = cartItems.map(cartItem => cartItem.id === item.id ? newItem : cartItem);
            setCartItems(newCartItems);
            decreaseQty(newItem);
        }
    };

    const handleRemove = (item) => {
        const newCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(newCartItems);
        removeCartItem(item);
    };

    const handleProceedToCheckout = () => {
        if (!user) {
            // Si no hay usuario, redireccionamos al login y guardamos la ruta a la que querían acceder
            navigate('/login', { state: { from: '/compra' } });
            return;
        }
        if (cartItems.length > 0) {
            navigate('/compra');
        } else {
            toast.error("No hay productos en el carrito.");
        }
    };

    return (
        <>
            <ToastContainer position="bottom-right" autoClose={5000} newestOnTop />
            <section className="cart-items">
                <div className='d_flex' id={`${isMobile ? 'mobile' : ''}`}>
                    <div className="cart-details">
                        {cartItems.length === 0 && <h1 className='no-items'>No hay productos en el carrito</h1>}
                        {cartItems.map((item) => (
                            <div key={item.id} className='cart-list d_flex'>
                                <div className="imgg">
                                    <img className="imgg" src={item.pictures} alt={item.product_name} />
                                </div>
                                <div className="cart-details">
                                    <div className="cart-flex">
                                        <div className="cart-info">
                                            <h3>{item.product_name}</h3>
                                            <div className="price-info">
                                                <h4>Bs {parseFloat(item.unitary_price).toFixed(2)} x {item.qty}</h4>
                                                <span>Bs {(parseFloat(item.unitary_price) * item.qty).toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <div className="cart-items-function">
                                            <div className="removeCart">
                                                <button className="removeCart" onClick={() => handleRemove(item)}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>

                                            <div className="cartControl d_flex">
                                                <button className="incCart" onClick={() => handleIncrease(item)}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                                <button className="desCart" onClick={() => handleDecrease(item)}>
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total d-flex" id='carttotal'>
                        <h3>Detalle del pedido</h3>
                        <div className="d_flex">
                            <h4>Precio total:</h4>
                            <h3>Bs {cartItems.reduce((total, item) => total + item.unitary_price * item.qty, 0).toFixed(2)}</h3>
                        </div>
                        <div className="botoncompra">
                            <button onClick={handleProceedToCheckout}>Pagar Productos</button >
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

Cart.propTypes = {
    updateCartItem: PropTypes.func.isRequired,
    removeCartItem: PropTypes.func.isRequired,
    decreaseQty: PropTypes.func.isRequired
};
