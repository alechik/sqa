class SellByProduct {
    constructor(id, product_id, product_amount, total_sell) {
        this.id = id;
        this.product_id = product_id;
        this.product_amount = product_amount;
        this.total_sell = total_sell;
    }

    toFirestore() {
        return {
            product_id: this.product_id,
            product_amount: this.product_amount,
            total_sell: this.total_sell
        }
    }
}

export { SellByProduct }