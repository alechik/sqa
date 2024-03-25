
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./views/Home.jsx";
import Login from "./views/Logins/Login.jsx";
import Datos from './assets/datos.js'
import {getProducts} from '../infraestructure/api/product.js'
import {useEffect, useState} from "react";
import Register from "./views/Logins/Register.jsx";
import AddProductForm from "./views/addProductform.jsx";
import Profile from "./views/user/Profile.jsx";
import AdminProfile from "./views/user/AdminProfile.jsx";
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

    console.log("Productos en el estado:", productos); // Agrega un console.log() para verificar los productos en el estado

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home productItems={productItems} productos={productos}/>} />
                <Route path="/iniciarsesion" element={<Login/>}/>
                <Route path="/registrarse" element={<Register/>}/>
                <Route path="/addproduct" element={<AddProductForm />} />
                <Route path='/perfil' element={<Profile/>}/>
                <Route path='/admin/:activepage' element={<AdminProfile productos={productos}/>}/>
            </Routes>
        </Router>

    )
}

export default App