
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";

function App() {


  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/iniciarsesion" element={<Login/>}/>
              <Route path='/registrarse' element={<Register/>}/>
          </Routes>
      </Router>

  )
}

export default App
