// sales_record.js
class SalesRecord {
    constructor(id, userId, deliveryId) {
        this.id = id;
        this.userId = userId;
        this.deliveryId = deliveryId; // este es un arreglo de IDs de entrega
    }
}

export { SalesRecord };
