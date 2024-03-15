import "./navbar.css"
import { Link } from 'react-router-dom';
import Search from "./Search.jsx";
export default function Navbar() {

     return <nav className="nav">
         <Link to="/" className="nombre-sitio">
             Tienda
         </Link>
         <Search/>
         <ul className="navegacion">
             <li>
                 <Link to="/iniciarsesion"> Iniciar sesion</Link>
                 <Link to="/registrarse"> Registrarse</Link>
             </li>
         </ul>
     </nav>
}
