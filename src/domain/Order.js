class Order {
    constructor(id, userId, products, deliveryAddress, status, totalPrice, createdAt, deliveryDetailsId, paymentMethod) {
      this.id = id;
      this.userId = userId;
      this.products = products;
      this.deliveryAddress = deliveryAddress;
      this.status = status;
      this.totalPrice = totalPrice;
      this.createdAt = createdAt;
      this.deliveryDetailsId = deliveryDetailsId;
      this.paymentMethod = paymentMethod;
    }
  
    toFirestore() {
      return {
        user_id: this.userId,
        products: this.products,
        delivery_address: this.deliveryAddress,
        status: this.status,
        total_price: this.totalPrice,
        created_at: this.createdAt,
        delivery_details_id: this.deliveryDetailsId,
        payment_method: this.paymentMethod
      };
    }
  
    static fromFirestore(documentSnapshot) {
      const data = documentSnapshot.data();
      return new Order(
        documentSnapshot.id,
        data.user_id,
        data.products,
        data.delivery_address,
        data.status,
        data.total_price,
        data.created_at,
        data.delivery_details_id,
        data.payment_method
      );
    }
  }
  
  export { Order };
  