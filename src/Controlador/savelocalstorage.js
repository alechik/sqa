// Función para guardar el carrito en localStorage
const saveCartToLocalStorage = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
};

// Función para cargar el carrito desde localStorage
const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
};
