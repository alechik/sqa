class DeliveryDetail {
    constructor(id, sellByProductId, totalSell, date) {
        this.id = id;
        this.sellByProductId = sellByProductId;
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