import React from 'react';
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./views/Home.jsx";
import Login from "./views/Logins/Login.jsx";
import PrivateRoute from './components/PrivateRoute.jsx';
import Datos from './assets/datos.js'
import {getProducts} from '../infraestructure/api/product.js'
import {useEffect, useState} from "react";
import Register from "./views/Logins/Register.jsx";
import AddProductForm from "./views/Products/addProductform.jsx";
import Profile from "./views/user/client/Profile.jsx";
import AdminProfile from "./views/user/admin/AdminProfile.jsx";
import { AuthProvider } from './components/context/AuthContext.jsx';
import EditProductForm from './views/Products/editProductform.jsx';


function App() {
    //stpe 1: fetch data from database
    const { productItems } = Datos;
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Llamada a la función getProducts() para obtener los productos
        getProducts()
            .then((productos) => {
                console.log("Productos obtenidos:", productos); // Agrega un console.log() para verificar los productos obtenidos
                setProductos(productos);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []); // El segundo argumento [] significa que esta función se ejecutará solo una vez después del montaje del componente

        return (
            <AuthProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home productItems={productItems} productos={productos} />} />
                        <Route path="/iniciarsesion" element={<Login />} />
                        <Route path="/registrarse" element={<Register />} />
                        {/* Las siguientes rutas están protegidas y solo accesibles cuando el usuario ha iniciado sesión */}
                        <Route path="/addproduct" element={<PrivateRoute><AddProductForm /></PrivateRoute>} />
                        <Route path="/admin/edit-product/:productId" element={<PrivateRoute><EditProductForm /></PrivateRoute>} />
                        <Route path="/perfil" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="/admin/:activepage" element={<PrivateRoute><AdminProfile productos={productos}/></PrivateRoute>} />
                    </Routes>
                </Router>
                
            </AuthProvider>
        );
    }

    export default App;