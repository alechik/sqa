class SalesRecord {
    constructor(id, user_id, delivery_id) {
        this.id = id;
        this.user_id = user_id;
        this.delivery_id = delivery_id;
    }

    toFirestore() {
        return {
            user_id: this.user_id,
            delivery_id: this.delivery_id
        };
    }
}

export { SalesRecord };
