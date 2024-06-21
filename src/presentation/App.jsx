import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Logins/Login";
import Register from "./views/Logins/Register";
import PrivateRoute from './components/PrivateRoute';
import Profile from "./views/user/client/Profile";
import AdminProfile from "./views/user/admin/AdminProfile";
import AddProductForm from '../presentation/views/Products/addProductform';
import EditProductForm from '../presentation/views/Products/editProductform';
import Compra from "./views/compra/compra";
import Pagoqr from "./views/compra/qrcompra";
import ConfirmacionPedido from './views/pedido/ConfirmacionPedido';
import SeguimientoPedido from "../presentation/views/pedido/SeguimientoPedido";
import Cart from "./views/carrito/Cart";
import SearchesPage from './views/busquedas/SearchesPage';
import { AuthProvider } from './components/context/AuthContext';
import { useAuth } from './components/context/AuthContext';
import Footer from './components/Footer';
import { getProducts } from '../infraestructure/api/product';
import { toast } from 'react-toastify';
import { OrderProvider } from './components/context/OrderContext'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import CrudProductExcel from './views/user/admin/CrudProductsExcel';
import Wishlist from "./views/Wishlist/Wishlist";
import OrderDetails from './components/historial/OrderDetails';
import CrudCategoria from "./views/user/admin/CrudCategoria";
import NotificationsPage from './views/user/worker/Notificaciones/notificationspage';
import Category from "./components/category";
import DeliveryDetailsPage from './views/user/worker/delivery';
import {SearchedProductsProvider} from "../infraestructure/api/searchedproducts.jsx";
import {getProductCategories} from "../infraestructure/api/product_category.js";
import EditCategoryForm from "./views/user/admin/EditCategoryForm.jsx";

const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
};


function App() {
    const { currentUser } = useAuth();
    const [productos, setProductos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        setCartItems(loadCartFromLocalStorage());
    }, []);

    useEffect(() => {
        getProducts()
            .then(products => setProductos(products))
            .catch(error => {
                console.error('Error fetching products:', error);
                toast.error("Error al cargar productos.");
            });
    }, []);

    useEffect(() => {
        getProductCategories().then(categorys => setCategorys(categorys))
            .catch(error => {
                console.error('categorias no encontradas', error)
            })
    }, []);

    const addtoCart = (product) => {
        const index = cartItems.findIndex(item => item.id === product.id);

        if (index !== -1) {
            if (cartItems[index].qty < product.stock) {
                const newItems = [...cartItems];
                newItems[index] = { ...newItems[index], qty: newItems[index].qty + 1 };
                setCartItems(newItems);
                saveCartToLocalStorage(newItems);
                toast.success(`Cantidad actualizada: ${product.product_name} ahora tiene ${newItems[index].qty} unidades.`);
            } else {
                toast.error(`No se puede añadir más de ${product.stock} unidades de ${product.product_name}.`);
            }
        } else {
            if (product.stock > 0) {
                const newItems = [...cartItems, { ...product, qty: 1 }];
                setCartItems(newItems);
                saveCartToLocalStorage(newItems);
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
            saveCartToLocalStorage(newItems);
            toast.info(`Cantidad disminuida: ${product.product_name} ahora tiene ${newItems[index].qty} unidades.`);
        } else if (index !== -1) {
            removeCartItem(product);
        }
    };


    const removeCartItem = (product) => {
        const newItems = cartItems.filter(item => item.id !== product.id);
        setCartItems(newItems);
        saveCartToLocalStorage(newItems);
        toast.error(`${product.product_name} eliminado del carrito.`);
    };

    return (
        <AuthProvider>
            <OrderProvider user={currentUser}>
                <SearchedProductsProvider>
                    <Router>
                        <Navbar cartItems={cartItems} setCartItems={setCartItems} addtoCart={addtoCart}/>
                        <main>
                            <Routes>
                                <Route path="/" element={<Home productos={productos} addtoCart={addtoCart} />} />
                                <Route path="/cart" element={<Cart cartItems={cartItems} updateCartItem={addtoCart} removeCartItem={removeCartItem} decreaseQty={decreaseQty} />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/registrarse" element={<Register />} />
                                <Route path="/search" element={<SearchesPage addtoCart={addtoCart} />} />
                                <Route path="/compra" element={<PrivateRoute><Compra cartItems={cartItems} /></PrivateRoute>} />
                                <Route path="/payment" element={<PrivateRoute><Pagoqr cartItems={cartItems} /></PrivateRoute>} />
                                <Route path="/delivery/:orderId" element={<PrivateRoute><DeliveryDetailsPage /></PrivateRoute>} />
                                <Route path="/notifications" element={<PrivateRoute allowedTypes={['1','2']}> <NotificationsPage /> </PrivateRoute>} />
                                <Route path="/pedidoconfirmado/:orderId" element={<PrivateRoute><ConfirmacionPedido /></PrivateRoute>} />
                                <Route path="/seguimientopedido/:orderId" element={<PrivateRoute><SeguimientoPedido /></PrivateRoute>} />
                                <Route path="/addproduct" element={<PrivateRoute><AddProductForm /></PrivateRoute>} />
                                <Route path="/addcategory" element={<PrivateRoute><CrudCategoria /></PrivateRoute>} />
                                <Route path="/admin/edit-product/:productId" element={<PrivateRoute><EditProductForm /></PrivateRoute>} />
                                <Route path="/admin/edit-category/:categoryId" element={<PrivateRoute><EditCategoryForm/></PrivateRoute>} />
                                <Route path="/perfil" element={<PrivateRoute><Profile /></PrivateRoute>} />
                                <Route path="/admin/:activepage" element={<PrivateRoute allowedTypes={['1']}><AdminProfile productos={productos} categorys = {categorys}/></PrivateRoute>} />
                                <Route path="/orders/:orderId" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />
                                <Route path="/admin/crud-products-excel" element={<PrivateRoute allowedTypes={['1']}><CrudProductExcel /></PrivateRoute>} />
                                <Route path="/wishlist" element={<PrivateRoute><Wishlist addtoCart={addtoCart} /></PrivateRoute>} />
                                <Route path="/Category" element={<Category addtoCart={addtoCart}/>} />
                            </Routes>
                        </main>
                        <Footer />
                    </Router>
                </SearchedProductsProvider>
            </OrderProvider>
        </AuthProvider>
    );
}

export default App;
