class Delivery {
    constructor(id, user_id, delivered, delivery_address, delivery_detail_id) {
        this.id = id;
        this.user_id = user_id;
        this.delivered = delivered;
        this.delivery_address = delivery_address;
        this.delivery_detail_id = delivery_detail_id;
    }

    toFirestore() {
        return {
            user_id: this.user_id,
            delivered: this.delivered,
            delivery_address: this.delivery_address,
            delivery_detail_id: this.delivery_detail_id
        };
    }
}

export { Delivery };