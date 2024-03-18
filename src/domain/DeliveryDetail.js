class DeliveryDetail {
    constructor(id, sellByProductId, totalSell, date) {
        this.id = id;
        this.sellByProductId = sellByProductId; // esto es un arreglo de IDs de 'sell_by_product'
        this.totalSell = totalSell;
        this.date = date;
    }

    toFirestore() {
        return {
            sellByProductId: this.sellByProductId,
            totalSell: this.totalSell,
            date: this.date
        };
    }
}

export { DeliveryDetail };