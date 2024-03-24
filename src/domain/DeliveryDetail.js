class DeliveryDetail {
    constructor(id, sell_by_product_id, total_sell, date) {
        this.id = id;
        this.sell_by_product_id = sell_by_product_id;
        this.total_sell = total_sell;
        this.date = date;
    }

    toFirestore() {
        return {
            sell_by_product_id: this.sell_by_product_id,
            total_sell: this.total_sell,
            date: this.date
        };
    }
}

export { DeliveryDetail };