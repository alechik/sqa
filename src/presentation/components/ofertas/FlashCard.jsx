import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductPopup from "./ProductPopup";
import './flashdeals.css';
import { fetchRatingsForProduct } from "../../../infraestructure/api/product_rating";
import { auth, db } from "../../../infraestructure/firebase--config";
import { collection, query, where, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NextArrow = ({ onClick }) => (
    <div className="control-btn" onClick={onClick}>
        <button className="next"><i className="fas fa-long-arrow-alt-right"></i></button>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="control-btn" onClick={onClick}>
        <button className="prev"><i className="fas fa-long-arrow-alt-left"></i></button>
    </div>
);

const FlashCard = ({ productItems, addtoCart }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productsWithRatings, setProductsWithRatings] = useState([]);

    useEffect(() => {
        const loadRatings = async () => {
            const tempProductsWithRatings = await Promise.all(productItems.map(async product => {
                const averageRating = await fetchRatingsForProduct(product.id);
                const isInWishlist = await checkWishlist(product.id);
                return { ...product, averageRating, isInWishlist };
            }));
            setProductsWithRatings(tempProductsWithRatings);
        };

        loadRatings();
    }, [productItems]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    const openProductPopup = product => setSelectedProduct(product);
    const closeProductPopup = () => setSelectedProduct(null);

    const checkWishlist = async (productId) => {
        const user = auth.currentUser;
        if (user) {
            const wishlistRef = collection(db, "wishlist");
            const q = query(wishlistRef, where("product_id", "==", productId), where("user_id", "==", user.uid));
            const snapshot = await getDocs(q);
            return !snapshot.empty;
        }
        return false;
    };

    const toggleWishlist = async (product) => {
        const user = auth.currentUser;
        if (!user) {
            toast.error("Please log in to modify your wishlist.");
            return;
        }

        const wishlistRef = collection(db, "wishlist");
        const q = query(wishlistRef, where("product_id", "==", product.id), where("user_id", "==", user.uid));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            await addDoc(wishlistRef, { product_id: product.id, user_id: user.uid });
            toast.success("Agregado a: Lista de Deseos.");
            updateLocalWishlist(product.id, true);
        } else {
            await deleteDoc(snapshot.docs[0].ref);
            toast.info("Eliminado de: Lista de Deseos.");
            updateLocalWishlist(product.id, false);
        }
    };

    const updateLocalWishlist = (productId, isInWishlist) => {
        setProductsWithRatings(productsWithRatings.map(p =>
            p.id === productId ? { ...p, isInWishlist } : p
        ));
    };

    return (
        <>
            <Slider {...settings}>
                {productsWithRatings.map((product) => (
                    <div className="box" key={product.id}>
                        <div className="product mtop" onClick={() => openProductPopup(product)}>
                            <div className="nombreyfoto">
                                <span className="discount">{product.product_name}</span>
                                <img className="imgg" src={product.pictures || 'src/presentation/assets/flash/flash-1.png'} alt={product.product_name}/>
                                <div className="product-like" onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}>
                                    <i className={product.isInWishlist ? "fas fa-heart" : "far fa-heart"}></i>
                                </div>
                            </div>
                            <div className="product-details">
                                <h3 style={{ fontSize: '16px', minHeight: '52px', maxHeight: '52px' }}>{product.description}</h3>
                                <div className="price">
                                    <h4>Bs {product.unitary_price}.00</h4>
                                    <button onClick={(e) => { e.stopPropagation(); addtoCart(product); }}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                </div>
                                <div className="rate">
                                    {[...Array(5)].map((_, index) => (
                                        <i key={index} className={`fas fa-star ${index < product.averageRating ? 'text-gold' : 'text-muted'}`}></i>
                                    ))}
                                    <span className="rating-number">{product.averageRating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {selectedProduct && (
                <ProductPopup product={selectedProduct} onClose={closeProductPopup} addtoCart={addtoCart} />
            )}
        </>
    );
};

export default FlashCard;
