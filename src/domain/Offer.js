class Offer {
    constructor(id, product_category_id, description, percentage, amount) {
        this.id = id;
        this.product_category_id = product_category_id;
        this.description = description;
        this.percentage = percentage;
        this.amount = amount;
    }

    toFirestore() {
        return {
            product_category_id: this.product_category_id,
            description: this.description,
            percentage: this.percentage,
            amount: this.amount
        }
    }
}

export { Offer }