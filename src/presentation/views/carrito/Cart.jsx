import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import './cart.css';

export default function Cart({ cartItems = [], updateCartItem, removeCartItem, decreaseQty }) {
    const navigate = useNavigate();

    const handleIncrease = (item) => {
        const newItem = { ...item, qty: item.qty + 1 };
        updateCartItem(newItem);
    };

    const handleDecrease = (item) => {
    decreaseQty(item)
    };


    const handleRemove = (item) => {
        removeCartItem(item);
    };

    const handleProceedToCheckout = () => {
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
                <div className="container d_flex">
                    <div className="cart-details">
                        {cartItems.length === 0 && <h1 className='no-items product'>No hay productos en el carrito</h1>}
                        {cartItems.map((item) => (
                            <div key={item.id} className='cart-list product d_flex'>
                                <div className="img">
                                    <img src={item.pictures} alt={item.product_name} />
                                </div>
                                <div className="cart-details">
                                    <h3>{item.product_name}</h3>
                                    <h4>${item.unitary_price.toFixed(2)} x {item.qty}</h4>
                                    <span>${(item.unitary_price * item.qty).toFixed(2)}</span>
                                    <div className="cart-items-function">
                                        <button className="removeCart" onClick={() => handleRemove(item)}>
                                            <i className="fas fa-times"></i>
                                        </button>
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
                        ))}
                    </div>
                    <div className="cart-total product">
                        <h3>Detalle del pedido</h3>
                        <div className="d_flex">
                            <h4>Precio total:</h4>
                            <h3>${cartItems.reduce((total, item) => total + item.unitary_price * item.qty, 0).toFixed(2)}</h3>
                        </div>
                        <div className="button-purchase">
                            <button onClick={handleProceedToCheckout}>Pagar Productos</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    updateCartItem: PropTypes.func.isRequired,
    removeCartItem: PropTypes.func.isRequired
};
