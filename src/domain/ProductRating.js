class ProductRating {
    constructor(id, product_id, rating, date, user_id) {
       this.id = id;
       this.product_id = product_id;
       this.rating = rating;
       this.date = date;
       this.user_id = user_id;
    }

    toFirestore () {
        return {
            product_id: this.product_id,
            rating: this.rating,
            date: this.date,
            user_id: this.user_id
        }
    }
}

export { ProductRating };