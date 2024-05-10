class ProfitPerLot {
    constructor(id, cost, id_product, profit, total_sell, time) {
        this.id = id;
        this.cost = cost;
        this.id_product = id_product;
        this.profit = profit;
        this.total_sell = total_sell;
        this.time = time || new Date(); // Si no se provee una fecha, usa la fecha y hora actual
    }

    toFirestore() {
        return {
            cost: this.cost,
            id_product: this.id_product,
            profit: this.profit,
            total_sell: this.total_sell,
            time: this.time
        };
    }
}

export { ProfitPerLot };
