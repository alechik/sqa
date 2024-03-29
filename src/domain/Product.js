class Product {
    constructor(id, description, pictures, banner_pictures, CategoryID, product_name, stock, gramaje, unitary_price, state) {
        this.id = id;
        this.description = description;
        this.pictures = pictures;
        this.banner_pictures = banner_pictures;
        this.CategoryID = CategoryID;
        this.product_name = product_name;
        this.stock = stock;
        this.unitary_price = unitary_price;
        this.gramaje = gramaje,
        this.state = state || (stock >= 1 ? "disponible" : "No disponible");
    }

    toFirestore() {
        return {
            description: this.description,
            pictures: this.pictures,
            banner_pictures: this.banner_pictures,
            CategoryID: this.CategoryID,
            product_name: this.product_name,
            stock: this.stock,
            unitary_price: this.unitary_price,
            gramaje: this.gramaje,
            state: this.state
        };
    }
}

export { Product };