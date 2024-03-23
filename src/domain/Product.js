class Product {
    constructor(id, description, pictures, banner_pictures, product_category_id, product_name, stock, price_id, state) {
        this.id = id;
        this.description = description;
        this.pictures = pictures;
        this.banner_pictures = banner_pictures;
        this.product_category_id = product_category_id;
        this.product_name = product_name;
        this.stock = stock;
        this.price_id = price_id;
        this.state = state;
    }

    toFirestore() {
        return {
            description: this.description,
            pictures: this.pictures,
            banner_pictures: this.banner_pictures,
            product_category_id: this.product_category_id,
            product_name: this.product_name,
            stock: this.stock,
            price_id: this.price_id,
            state: this.state
        };
    }
}

export { Product };