class Price {
    constructor(id, offer_id, current_price, last_price, currency, update_date) {
        this.id = id;
        this.offer_id = offer_id;
        this.current_price = current_price;
        this.last_price = last_price;
        this.currency = currency;
        this.update_date = update_date;
    }

    toFirestore() {
        return {
            offer_id: this.offer_id,
            current_price: this.current_price,
            last_price: this.last_price,
            currency: this.currency,
            update_date: this.update_date
        }
    }
}

export { Price }