import { Order } from '../../domain/Order';
import { db } from '../firebase--config';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  getDoc
} from 'firebase/firestore';

export async function getAllOrders() {
  try {
    const ordersCollectionRef = collection(db, 'orders');
    const ordersSnapshot = await getDocs(ordersCollectionRef);
    return ordersSnapshot.docs.map(doc => Order.fromFirestore(doc));
  } catch (error) {
    console.error("Failed to fetch all orders:", error);
    throw new Error('Unable to fetch orders.');
  }
}

  export async function getOrderById(orderId) {
    if (!orderId) {
      throw new Error('No order ID provided');
    }
    try {
      const orderDocRef = doc(db, 'orders', orderId);
      const orderSnapshot = await getDoc(orderDocRef);
      if (!orderSnapshot.exists()) {
        throw new Error('Order not found');
      }
      const orderData = orderSnapshot.data(); // Esto te da los datos crudos del documento
      // Ahora puedes loguear y verificar que los datos son correctos
      return Order.fromFirestore(orderSnapshot); // Asumiendo que esta es una función que transforma los datos.
    } catch (error) {
      console.error("Error fetching order with ID", orderId, error);
      throw new Error('Unable to fetch order.');
    }
  }



export async function createOrder(cart, user) {
  if (!user || !user.email || !cart || !cart.items || cart.items.length === 0) {
    console.error("Invalid user or cart data", { user, cart });
    throw new Error("Invalid data: User email or cart items are missing.");
  }

  const orderData = {
    userEmail: user.email,
    products: cart.items.map(item => ({
      productId: item.id,
      quantity: item.qty,
      unitPrice: item.unitary_price
    })),
    deliveryAddress: user.address || 'N/A',
    status: 'Pending',
    totalPrice: cart.total,
    paymentMethod: 'QR',
  };

  try {
    const ordersCollectionRef = collection(db, 'orders');
    const orderDocRef = await addDoc(ordersCollectionRef, orderData);
    return orderDocRef.id;
  } catch (error) {
    console.error("Failed to create order:", error);
    throw new Error('Unable to create order.');
  }
}

export async function updateOrder(orderId, updatedData) {
  try {
    const orderDocRef = doc(db, 'orders', orderId);
    await updateDoc(orderDocRef, updatedData);
  } catch (error) {
    console.error("Failed to update order:", error);
    throw new Error('Unable to update order.');
  }
}

export async function deleteOrder(orderId) {
  try {
    const orderDocRef = doc(db, 'orders', orderId);
    await deleteDoc(orderDocRef);
  } catch (error) {
    console.error("Failed to delete order:", error);
    throw new Error('Unable to delete order.');
  }
}

export async function getOrdersByUserId(userId) {
  try {
    const ordersQuery = query(collection(db, 'orders'), where('userId', '==', userId));
    const querySnapshot = await getDocs(ordersQuery);
    return querySnapshot.docs.map(doc => Order.fromFirestore(doc));
  } catch (error) {
    console.error("Failed to fetch orders by user ID:", error);
    throw new Error('Unable to fetch orders for user.');
  }
}

async function updateOrderStatus(nuevoEstado) {
  try {
    // Obtener todos los pedidos
    const orders = await getAllOrders();

    // Verificar si hay pedidos
    if (orders.length === 0) {
      console.error('No hay pedidos en la base de datos.');
      return;
    }

    // Ordenar los pedidos por fecha de creación de forma descendente
    orders.sort((a, b) => b.createdAt - a.createdAt);

    // Obtener el ID del último pedido
    const ultimoPedidoId = orders[0].id;

    // Actualizar el estado del último pedido utilizando updateOrderStatus
    await updateOrderStatus(ultimoPedidoId, { status: nuevoEstado });

    console.log(`El estado del último pedido con ID ${ultimoPedidoId} se ha actualizado correctamente a "${nuevoEstado}".`);
  } catch (error) {
    console.error('Error al actualizar el estado del último pedido:', error);
    throw new Error('No se pudo actualizar el estado del último pedido.');
  }
}

// Llamar a la función para actualizar el estado del último pedido
const nuevoEstado = 'confirmado'; // Define el nuevo estado del pedido
updateOrderStatus(nuevoEstado);

export default{
  getOrdersByUserId,
  deleteOrder,
  updateOrder,
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrderStatus
}