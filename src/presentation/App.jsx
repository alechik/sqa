
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Datos from './assets/datos.js'
import {useState} from "react";
function App() {
    //stpe 1: fetch data from database
    const {productItems} = Datos


    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home productItems={productItems}/>} />
                <Route path="iniciarsesion" element={<Login/>}/>
            </Routes>
        </Router>

    )
}

export default App
