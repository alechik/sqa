import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import Login from "./views/Logins/Login.jsx";
import Register from "./views/Logins/Register.jsx";
import PrivateRoute from './components/PrivateRoute.jsx';
import Profile from "./views/user/client/Profile.jsx";
import AdminProfile from "./views/user/admin/AdminProfile.jsx";
import AddProductForm from "./views/Products/AddProductForm.jsx";
import EditProductForm from "./views/Products/EditProductForm.jsx";
import Compra from "./views/compra/Compra.jsx";
import Pagoqr from "./views/compra/Pagoqr.jsx";
import ConfirmacionPedido from './views/pedido/ConfirmacionPedido.jsx';
import SeguimientoPedido from "./views/pedido/SeguimientoPedido.jsx"
import Cart from "./views/carrito/Cart.jsx";
import SearchesPage from './views/busquedas/SearchesPage.jsx';
import { AuthProvider } from './components/context/AuthContext.jsx';
import Footer from './components/Footer.jsx';
import { getProducts } from '../infraestructure/api/product.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    const [productos, setProductos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getProducts()
            .then(setProductos)
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addtoCart = (product) => {
        const index = cartItems.findIndex(item => item.id === product.id);

        if (index !== -1) {
            const existingItem = cartItems[index];
            if (existingItem.qty < product.stock) {
                const newItems = [...cartItems];
                newItems[index] = { ...existingItem, qty: existingItem.qty + 1 };
                setCartItems(newItems);
                toast.success(`Cantidad actualizada: ${product.product_name} ahora tiene ${newItems[index].qty} unidades.`);
            } else {
                toast.error(`No se puede añadir más de ${product.stock} unidades de ${product.product_name}.`);
            }
        } else {
            if (product.stock > 0) {
                setCartItems([...cartItems, { ...product, qty: 1 }]);
                toast.success(`${product.product_name} añadido al carrito.`);
            } else {
                toast.error(`${product.product_name} no tiene unidades disponibles.`);
            }
        }
    };

    const decreaseQty = (product) => {
        const index = cartItems.findIndex(item => item.id === product.id);
        if (index !== -1 && cartItems[index].qty > 1) {
            const newItems = [...cartItems];
            newItems[index].qty -= 1;
            setCartItems(newItems);
            toast.info(`Cantidad disminuida: ${product.product_name} ahora tiene ${newItems[index].qty} unidades.`);
        } else {
            removeCartItem(product);
        }
    };

    const removeCartItem = (product) => {
        const newItems = cartItems.filter(item => item.id !== product.id);
        setCartItems(newItems);
        toast.error(`${product.product_name} eliminado del carrito.`);
    };

    return (
        <AuthProvider>
            <Router>
                <Navbar cartItems={cartItems} addtoCart={addtoCart} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home productos={productos} addtoCart={addtoCart} />} />
                        <Route path="/cart" element={<Cart cartItems={cartItems} updateCartItem={addtoCart} removeCartItem={removeCartItem} decreaseQty={decreaseQty} />} />
                        <Route path="/iniciarsesion" element={<Login />} />
                        <Route path="/registrarse" element={<Register />} />
                        <Route path="/search" element={<SearchesPage />} />
                        <Route path="/compra" element={<PrivateRoute><Compra cartItems={cartItems} /></PrivateRoute>} />
                        <Route path="/payment" element={<PrivateRoute><Pagoqr cartItems={cartItems} /></PrivateRoute>} />
                        <Route path="/pedidoconfirmado/:orderId" element={<PrivateRoute><ConfirmacionPedido /></PrivateRoute>} />
                        <Route path="/seguimientopedido/:orderId" element={<PrivateRoute><SeguimientoPedido /></PrivateRoute>} />
                        <Route path="/addproduct" element={<PrivateRoute><AddProductForm /></PrivateRoute>} />
                        <Route path="/admin/edit-product/:productId" element={<PrivateRoute><EditProductForm /></PrivateRoute>} />
                        <Route path="/perfil" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="/admin/:activepage" element={<PrivateRoute><AdminProfile productos={productos} /></PrivateRoute>} />
                    </Routes>
                    <Footer />
                </main>
            </Router>
            <ToastContainer />
        </AuthProvider>
    );
}

export default App;
