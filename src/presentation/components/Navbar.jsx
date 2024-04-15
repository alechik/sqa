import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from "./Search";
import { getUserProfile } from '../../infraestructure/api/user';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "./navbar.css";
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../infraestructure/firebase--config';
import { collection, getFirestore, getDocs } from 'firebase/firestore';

export default function Navbar({ cartitem }) {
    const [userProfile, setUserProfile] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate(); // Hook para navegar
    const auth = getAuth(); // Inicializa la autenticación de Firebase
    const [iconUrls, setIconUrls] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            const db = getFirestore();
            const categoriesCollection = collection(db, 'product_categories');
            const categoriesSnapshot = await getDocs(categoriesCollection);
            const categoriesData = categoriesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setCategories(categoriesData);
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // El usuario ha iniciado sesión, obtén su perfil
                const profile = await getUserProfile(user.uid); // Asume que getUserProfile puede tomar un UID y retornar datos de perfil
                setUserProfile(profile);
            } else {
                // El usuario ha cerrado sesión
                setUserProfile(null);
            }
        });
        return () => unsubscribe(); // Desuscribirse al desmontar el componente
    }, []);

    useEffect(() => {
        const fetchIconUrls = async () => {
            try {
                const storeIconUrl = await getDownloadURL(ref(storage, 'Iconos/shop.png'))
                const shoppingCartIconUrl = await getDownloadURL(ref(storage, 'Iconos/shopping-cart.png'))
                const logoutIconUrl = await getDownloadURL(ref(storage, 'Iconos/logout.png'))
                setIconUrls({
                    storeIcon: storeIconUrl,
                    shoppingCartIcon: shoppingCartIconUrl,
                    logoutIcon: logoutIconUrl
                });
            } catch (error) {
                console.error('Error al obtener las URL de los iconos:', error);
            }
        };
        fetchIconUrls();
    })

    const logout = () => {
        auth.signOut(); // Cierra sesión en Firebase
        navigate('/iniciarsesion'); // Redirige al usuario a la página de inicio de sesión
    };

    return (
        <nav className="nav">
            <img src={iconUrls.storeIcon} alt="Store Icon" />
            <Link to="/" className="nombre-sitio">Store</Link>
        {/*    <select name="category" id="category" className='select-custom'>
                <option value="">Categorías</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>*/}    
            <Search />
            <ul className="navegacion">
                {userProfile ? (
                    <li>
                        <div className='cart'>
                            <Link to='/cart' className="cart-link">
                                <img src={iconUrls.shoppingCartIcon} alt="Carrito" ></img>
                                <span>{cartitem.length === 0 ? "" : cartitem.length}</span>
                            </Link>
                        </div>
                        {userProfile.userTypeId === '1' && <Link to="/admin/AdminInfo" className="perfil-link"><img
                            src={userProfile.avatar || '/user-profile.png'}
                            alt="Perfil"
                            className="navbar-avatar"
                            style={{ borderRadius: '20%', width: '50px', height: '50px' }}
                        /></Link>}
                        {userProfile.userTypeId === '2' && <Link to="/admin/crud-productos" className="perfil-link"><img
                            src={userProfile.avatar || '/user-profile.png'}
                            alt="Perfil"
                            className="navbar-avatar"
                            style={{ borderRadius: '20%', width: '50px', height: '50px' }}
                        /></Link>}
                        {userProfile.userTypeId === '3' && <Link to="/perfil" className="perfil-link"><img
                            src={userProfile.avatar || '/user-profile.png' }
                            alt="Perfil"
                            className="navbar-avatar"
                            style={{ borderRadius: "20%", width: "50px", height: "50px", objectfit: "cover" }}
                        /></Link>}
                        <button onClick={logout} className  ="logout-button" title="Cerrar Sesión" alt="Cerrar Sesión" >
                            <img src={iconUrls.logoutIcon}></img>
                        </button>
                    </li>
                ) : (
                    <li className='links'>
                        <Link to="/iniciarsesion">Iniciar sesión</Link>     
                    </li>
                )}
            </ul>
        </nav>
    );
}
