// orders.js
import { Order } from '../../domain/Order';
import { db } from '../firebase--config';
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  Timestamp
} from 'firebase/firestore';

export async function getAllOrders() {
  const ordersCollectionRef = collection(db, 'orders');
  const ordersSnapshot = await getDocs(ordersCollectionRef);
  return ordersSnapshot.docs.map(Order.fromFirestore);
}

export async function getOrderById(orderId) {
  const orderDocRef = doc(db, 'orders', orderId);
  const orderSnapshot = await getDoc(orderDocRef);
  if (!orderSnapshot.exists()) {
    throw new Error('Order not found');
  }
  return Order.fromFirestore(orderSnapshot);
}

export async function createOrder(orderData) {
  const newOrder = new Order(
    null,
    orderData.userId,
    orderData.products,
    orderData.deliveryAddress,
    orderData.status,
    orderData.totalPrice,
    Timestamp.now(), // Firestore timestamp for the creation date
    orderData.deliveryDetailsId,
    orderData.paymentMethod
  );
  const ordersCollectionRef = collection(db, 'orders');
  const orderDocRef = await addDoc(ordersCollectionRef, newOrder.toFirestore());
  return orderDocRef.id;
}

export async function updateOrder(orderId, updatedData) {
  const orderDocRef = doc(db, 'orders', orderId);
  await updateDoc(orderDocRef, updatedData);
}

export async function deleteOrder(orderId) {
  const orderDocRef = doc(db, 'orders', orderId);
  await deleteDoc(orderDocRef);
}

export async function getOrdersByUserId(userId) {
  const ordersQuery = query(collection(db, 'orders'), where('user_id', '==', userId));
  const querySnapshot = await getDocs(ordersQuery);
  return querySnapshot.docs.map(Order.fromFirestore);
}


export default{
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrdersByUserId
}