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
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export async function createOrder(cart, user) {
  try {
    const orderData = {
      userId: user.id,
      products: cart.items,
      deliveryAddress: user.address,
      status: 'Pending',
      totalPrice: cart.total,
      paymentMethod: 'QR',
    };

    const newOrder = new Order(
      null,
      orderData.userId,
      orderData.products,
      orderData.deliveryAddress,
      orderData.status,
      orderData.totalPrice,
      Timestamp.now(), // Firestore timestamp for the creation date
      null, // deliveryDetailsId: orderData.deliveryDetailsId,
      orderData.paymentMethod
    );

    const ordersCollectionRef = collection(db, 'orders');
    const orderDocRef = await addDoc(ordersCollectionRef, newOrder.toFirestore());
    const orderId = orderDocRef.id;
    console.log("Order id:", orderId);

    const emailParams = {
      order_id: orderId,
      to_name: user.name,
      total: cart.total,
      fecha: new Date().toLocaleDateString("es-ES"),
      to_email: user.email,
      reply_to: 'ecommercesantillo@gmail.com',
    };

    const serviceId = 'service_f6wqud7';
    const templateId = 'template_9ilml3q';
    const userId = 'XnyTm9fLJd1grL1wx';

    await emailjs.send(serviceId, templateId, emailParams, userId);
    toast.success('Confirmación de pago enviada al correo!', {
      position: "bottom-right"
    });

    return orderId;
  } catch (error) {
    console.error("Error during order creation:", error);
    throw error;
  }
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

export default {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrdersByUserId
};
