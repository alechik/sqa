class ProfitPerLot {
    constructor(id, cost, quantity, id_product, profit, total_sell, time, ppp) {
        this.id = id;
        this.cost = cost;
        this.id_product = id_product;
        this.profit = profit;
        this.total_sell = total_sell;
        this.time = time;
        this.quantity = quantity;
        this.ppp = ppp;  // Asegúrate de que esto esté incluido
    }

    toFirestore() {
        return {
            cost: this.cost,
            id_product: this.id_product,
            profit: this.profit,
            total_sell: this.total_sell,
            quantity: this.quantity,
            time: this.time,
            ppp: this.ppp  // Asegúrate de que esto esté incluido
        };
    }
}

export { ProfitPerLot };
