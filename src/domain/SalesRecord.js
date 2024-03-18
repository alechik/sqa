class SalesRecord {
    constructor(id, userId, deliveryId) {
        this.id = id;
        this.userId = userId;
        this.deliveryId = deliveryId;
    }

    toFirestore() {
        return {
            userId: this.userId,
            deliveryId: this.deliveryId
        };
    }
}

export { SalesRecord };
