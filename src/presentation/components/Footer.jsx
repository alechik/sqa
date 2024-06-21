import React, {useState, useEffect} from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../infraestructure/firebase--config';
import tuImagen from '../assets/iconoWI.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    const [iconUrls, setIconUrls] = useState({});

    useEffect(() => {
        const fetchIconUrls = async () => {
            try {
                const whatsappUrl = await getDownloadURL(ref(storage, 'Iconos/whatsapp.png'));
                const facebookUrl = await getDownloadURL(ref(storage, 'Iconos/facebook.png'));
                const instagramUrl = await getDownloadURL(ref(storage, 'Iconos/instagram.png'));
                const twitterUrl = await getDownloadURL(ref(storage, 'Iconos/twitter.png'));
                setIconUrls({
                    whatsapp: whatsappUrl,
                    facebook: facebookUrl,
                    instagram: instagramUrl,
                    twitter: twitterUrl,
                });
            } catch (error) {
                console.error('Error al obtener las URL de los iconos:', error);
            }
        };
        fetchIconUrls();
    }, []);

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const reloadHomePage = (event) => {
        event.preventDefault();
        window.location.href = '/';
    };


    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-contact">
                    <p><strong>Teléfono:</strong> +591 60032422</p>
                    <p><strong>Email:</strong> <a href="mailto:ecommercesantillo@gmail.com">ecommercesaltillo@gmail.com</a></p>
                </div>
                <div className="footer-social">
                    <a href="https://wa.me/59160032422" target="_blank" rel="noopener noreferrer"><img src={iconUrls.whatsapp} alt="WhatsApp" /></a>
                    <a href="https://www.facebook.com/Chambis" target="_blank" rel="noopener noreferrer"><img src={iconUrls.facebook} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/Chambis" target="_blank" rel="noopener noreferrer"><img src={iconUrls.instagram} alt="Instagram" /></a>
                    <a href="https://twitter.com/Chambis" target="_blank" rel="noopener noreferrer"><img src={iconUrls.twitter} alt="Twitter" /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-legal">
                    <Link to="/terminos">Términos y Condiciones</Link>
                    <Link to="/privacidad">Política de Privacidad</Link>
                </div>
                <div className="footer-brand">
                    <a href="/" onClick={reloadHomePage} className="nombre-sitio">
                        <img src={tuImagen} alt="logo" />
                    </a>
                    <button onClick={scrollToTop} className="scroll-top-button">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
                <div className="footer-copy">
                    <p className='derecho'>© {new Date().getFullYear()} Chambis Developer - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
