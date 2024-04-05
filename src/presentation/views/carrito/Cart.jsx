import React from "react";
import {useNavigate} from "react-router-dom";
import './cart.css'

export default function Cart({cartitem, addtoCart, decreaseQty}){
    // eslint-disable-next-line react/prop-types
    const totalPrice = cartitem.reduce((price,item) => price + item.qty * item.unitary_price, 0)
    return (<>
        <section className="cart-items">
            <div className="contenedor d_flex">
                <div className="cart-details">
                    {/* eslint-disable-next-line react/prop-types */}
                    {cartitem.length === 0 && <h1 className='no-items produto'> no hay productos en el carrito</h1>}
                    {/* eslint-disable-next-line react/prop-types */}
                    {cartitem.map((item) => {
                        const productQty = item.unitary_price * item.qty
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className='cart-list product d_flex'>
                                <div className="img">
                                    <img src={item.pictures} alt="" />
                                </div>
                                <div className="cart-details">
                                    <h3>{item.product_name}</h3>
                                    <h4>{item.unitary_price}.00 * {item.qty}</h4>
                                    <span>Bs{productQty}.00</span>
                                </div>
                                <div className="cart-items-function">
                                    <div className="removeCart">
                                        <button >
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
                        )
                    })}
                </div>
                    <div className="cart-total product">
                        <h3 id='detalle'>Detalle del pedido</h3>
                        <div className="d_flex">
                            <h4>Precio total :</h4>
                            <h3 id='precio-total'>${totalPrice}.00</h3>
                        </div>
                        <div className="botoncompra">
                            <button>Comprar Productos</button>
                        </div>
                    </div>
            </div>
        </section>
    </>
    )
}