class Invoice {
    constructor(id, delivery_id, user_id, description, date) {
        this.id = id;
        this.delivery_id = delivery_id;
        this.user_id = user_id;
        this.description = description;
        this.date = date;
    }
    
    toFirestore() {
        return {
            delivery_id: this.delivery_id,
            user_id: this.user_id,
            description: this.description,
            date: this.date
        }
    }
}

export { Invoice }