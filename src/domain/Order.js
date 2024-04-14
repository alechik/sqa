class Order {
  constructor(userId, products, deliveryAddress, status, totalPrice, createdAt, deliveryDetailsId, paymentMethod, id = null) {
    this.id = id; // El id es opcional y solo se usa cuando se recupera un pedido existente.
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
      data.user_id,
      data.products,
      data.delivery_address,
      data.status,
      data.total_price,
      data.created_at,
      data.delivery_details_id,
      data.payment_method,
      documentSnapshot.id // El ID se pasa al final como un argumento opcional
    );
  }
}

export { Order };
