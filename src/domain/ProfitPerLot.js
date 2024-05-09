class ProfitPerLot {
    constructor(id, cost, id_product, profit, total_sell) {
        this.id = id;
        this.cost = cost;
        this.id_product = id_product;
        this.profit = profit;
        this.total_sell = total_sell;
    }

    toFirestore() {
        return {
            cost: this.cost,
            id_product: this.id_product,
            profit: this.profit,
            total_sell: this.total_sell
        };
    }
}

export { ProfitPerLot };
