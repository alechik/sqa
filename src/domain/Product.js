class Product {
    constructor(
        id,
        description,
        pictures,
        banner_pictures,
        CategoryID,
        product_name,
        stock,
        gramaje,
        unitary_price,
        date_added,
        state,
        ppp = null // Añadir el campo ppp con un valor por defecto de null
    ) {
        this.id = id;
        this.description = description;
        this.pictures = pictures;
        this.banner_pictures = banner_pictures;
        this.CategoryID = CategoryID;
        this.product_name = product_name;
        this.stock = stock;
        this.gramaje = gramaje;
        this.unitary_price = unitary_price;
        this.date_added = date_added;
        this.state = state || this.updateStateBasedOnStock(stock); // Inicializa el estado basado en el stock si no se proporciona
        this.ppp = ppp;
    }

    updateStateBasedOnStock(stock) {
        return stock > 0 ? 'disponible' : 'No disponible';
    }

    toFirestore() {
        this.state = this.updateStateBasedOnStock(this.stock);
        
        return {
            description: this.description,
            pictures: this.pictures,
            banner_pictures: this.banner_pictures,
            CategoryID: this.CategoryID,
            product_name: this.product_name,
            stock: this.stock,
            gramaje: this.gramaje,
            unitary_price: this.unitary_price,
            date_added: this.date_added,
            state: this.state,
            ppp: this.ppp
        };
    }
}

export { Product };
