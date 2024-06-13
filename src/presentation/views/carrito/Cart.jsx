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
                <div className=" d_flex">
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
                                                <h4>${parseFloat(item.unitary_price).toFixed(2)} x {item.qty}</h4>
                                                <span>${(parseFloat(item.unitary_price) * item.qty).toFixed(2)}</span>
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
                            <h3>${cartItems.reduce((total, item) => total + item.unitary_price * item.qty, 0).toFixed(2)}</h3>
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
    cartItems: PropTypes.array.isRequired,
    updateCartItem: PropTypes.func.isRequired,
    removeCartItem: PropTypes.func.isRequired
};