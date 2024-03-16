// delivery_detail.js
class DeliveryDetail {
    constructor(id, sellByProductId, totalSell, date) {
        this.id = id;
        this.sellByProductId = sellByProductId; // esto es un arreglo de IDs de 'sell_by_product'
        this.totalSell = totalSell;
        this.date = date;
    }
}

export { DeliveryDetail };
