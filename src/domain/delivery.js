class Delivery {
    constructor(id, userId, delivered, deliveryAddress, deliveryDetailId) {
        this.id = id;
        this.userId = userId;
        this.delivered = delivered;
        this.deliveryAddress = deliveryAddress;
        this.deliveryDetailId = deliveryDetailId;
    }

    toFirestore() {
        return {
            userId: this.userId,
            delivered: this.delivered,
            deliveryAddress: this.deliveryAddress,
            deliveryDetailId: this.deliveryDetailId
        };
    }
}

export { Delivery };