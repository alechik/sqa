import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cart.css';

export default function Cart({ cartitem, addtoCart, decreaseQty }) {
    const navigate = useNavigate();
    const totalPrice = cartitem.reduce((total, item) => total + item.qty * item.unitary_price, 0);

    const handleProceedToCheckout = () => {
        if (cartitem.length > 0) {
            navigate('/compra');
        } else {
            toast.error("No hay productos en el carrito.");  // Usar toast para mostrar mensajes de error
        }
    };

    return (
        <>
            <ToastContainer position="bottom-right" autoClose={5000} newestOnTop/>
            <section className="cart-items">
                <div className="contenedor d_flex">
                    <div className="cart-details">
                        {cartitem.length === 0 && <h1 className='no-items produto'>No hay productos en el carrito</h1>}
                        {cartitem.map((item) => {
                            const productQty = item.unitary_price * item.qty;
                            return (
                                <div key={item.id} className='cart-list product d_flex'>
                                    <div className="img">
                                        <img src={item.pictures} alt={item.product_name} />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.product_name}</h3>
                                        <h4>${item.unitary_price.toFixed(2)} * {item.qty}</h4>
                                        <span>${productQty.toFixed(2)}</span>
                                    </div>
                                    <div className="cart-items-function">
                                        <div className="removeCart">
                                            <button onClick={() => decreaseQty(item)}>
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                        <div className="cartControl d_flex">
                                            <button className="incCart" onClick={() => addtoCart(item)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                            <button className="desCart" onClick={() => decreaseQty(item)}>
                                                <i className="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="cart-total product">
                        <h3>Detalle del pedido</h3>
                        <div className="d_flex">
                            <h4>Precio total:</h4>
                            <h3>${totalPrice.toFixed(2)}</h3>
                        </div>
                        <div className="botoncompra">
                            <button onClick={handleProceedToCheckout}>Pagar Productos</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
