class Order {
  constructor(id, userEmail, products, deliveryAddress, status, totalPrice, paymentMethod) {
    this.id = id;
    this.userEmail = userEmail;
    this.products = products;
    this.deliveryAddress = deliveryAddress;
    this.status = status;
    this.totalPrice = totalPrice;
    this.paymentMethod = paymentMethod;
  }

  static fromFirestore(snapshot) {
    const data = snapshot.data();
    return new Order(
      snapshot.id,
      data.userEmail,
      data.products,
      data.deliveryAddress,
      data.status,
      data.totalPrice,
      data.paymentMethod
    );
  }
}


export { Order };
