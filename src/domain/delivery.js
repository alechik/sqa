// delivery.js
class Delivery {
    constructor(id, userId, delivered, deliveryAddress, deliveryDetailId) {
        this.id = id;
        this.userId = userId;
        this.delivered = delivered;
        this.deliveryAddress = deliveryAddress;
        this.deliveryDetailId = deliveryDetailId;
    }
}

export { Delivery };
