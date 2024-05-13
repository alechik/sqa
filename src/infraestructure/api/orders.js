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
  getDoc,
  serverTimestamp
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
    // No necesitas transformar los datos, solo devuélvelos
    return orderData;
  } catch (error) {
    console.error("Error fetching order with ID", orderId, error);
    throw new Error('Unable to fetch order.');
  }
}

// Variable de bloqueo para controlar la creación de orden
let isCreatingOrder = false;

export async function createOrder(user, cartItems) {
  if (isCreatingOrder) {
    console.error("Una orden ya está en proceso de creación.");
    throw new Error("Operación en proceso: Ya se está creando una orden.");
  }

  if (!user?.email || cartItems.length === 0) {
    console.error("Datos inválidos: Falta el correo del usuario o los artículos del carrito.");
    throw new Error("Datos inválidos: Falta el correo del usuario o los artículos del carrito.");
  }

  // Establecer el bloqueo
  isCreatingOrder = true;

  const orderData = {
    userEmail: user.email,
    products: cartItems.map(item => ({
      productId: item.id,
      quantity: item.qty,
      unitPrice: item.unitary_price
    })),
    deliveryAddress: user.address || 'No especificada',
    status: 'Pendiente',
    createdAt: serverTimestamp(),
    totalPrice: cartItems.reduce((total, item) => total + (item.unitary_price * item.qty), 0),
    paymentMethod: 'QR'
  };

  const ordersCollectionRef = collection(db, 'orders');
  try {
    const orderDocRef = await addDoc(ordersCollectionRef, orderData);
    console.log("Pedido creado con éxito, ID del pedido:", orderDocRef.id);

    // Liberar el bloqueo después de crear la orden
    isCreatingOrder = false;
    return orderDocRef.id;
  } catch (error) {
    console.error("Error al crear la orden:", error);
    // Asegurarse de liberar el bloqueo si falla la creación de la orden
    isCreatingOrder = false;
    throw new Error('No se pudo crear la orden.');
  }
}




async function decreaseStock(productId, quantity) {
  const productRef = doc(db, 'products', productId);
  const productSnap = await getDoc(productRef);
  if (!productSnap.exists()) {
    throw new Error(`No se encontró el producto con ID ${productId}`);
  }
  const productData = productSnap.data();
  if (productData.stock < quantity) {
    throw new Error('No hay suficiente stock para el producto: ' + productData.product_name);
  }
  await updateDoc(productRef, {
    stock: productData.stock - quantity
  });
}

async function decreaseProductStock(productId, quantity) {
  const productDocRef = doc(db, 'products', productId);
  const productDoc = await getDoc(productDocRef);
  if (!productDoc.exists()) {
    throw new Error('Product not found');
  }

  const productData = productDoc.data();
  const updatedStock = productData.stock - quantity;

  if (updatedStock >= 0) {
    await updateDoc(productDocRef, { stock: updatedStock });
  } else {
    throw new Error('Not enough stock available');
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

// Función para actualizar el estado de un pedido con manejo de devoluciones parciales y completas
export async function updateOrderStatus(orderId, newStatus, productsReturned) {
  const orderRef = doc(db, "orders", orderId);
  const orderSnap = await getDoc(orderRef);

  if (!orderSnap.exists()) {
    throw new Error('Order not found');
  }

  const orderData = orderSnap.data();
  let allReturned = true; // Asumir que todo es devuelto a menos que se encuentre lo contrario

  // Actualizar productos basado en devoluciones parciales
  const updatedProducts = orderData.products.map(product => {
    const returnedProduct = productsReturned.find(p => p.productId === product.productId);
    if (returnedProduct) {
      const remainingQuantity = product.quantity - returnedProduct.quantity;
      if (remainingQuantity > 0) {
        allReturned = false; // Si queda alguna cantidad, no está totalmente devuelto
      }
      return {
        ...product,
        quantity: remainingQuantity,
        returnedQuantity: (product.returnedQuantity || 0) + returnedProduct.quantity
      };
    } else {
      allReturned = false; // Si algún producto no está devuelto, marcar como no totalmente devuelto
      return product;
    }
  });

  // Determinar el estado final del pedido
  let status = newStatus;
  if (productsReturned && productsReturned.length > 0) {
    status = allReturned ? 'Devuelto' : 'Parcialmente Devuelto';
  }

  // Actualizar el documento del pedido
  await updateDoc(orderRef, { products: updatedProducts, status });

  return { success: true, status };
}


// Llamar a la función para actualizar el estado del último pedido
const nuevoEstado = 'Entregado'; // Define el nuevo estado del pedido
updateOrderStatus(nuevoEstado);

export async function updateOrderAfterReturn(orderId, productId, quantity, returnDate) {
  const orderRef = doc(db, 'orders', orderId);
  const orderSnap = await getDoc(orderRef);

  if (orderSnap.exists()) {
    let allReturned = true;
    let anyReturned = false; // Indica si algún producto ha sido parcialmente devuelto
    const products = orderSnap.data().products;
    const updatedProducts = products.map(product => {
      if (product.productId === productId) {
        const remainingQuantity = product.quantity - quantity;
        if (remainingQuantity > 0) {
          allReturned = false;
          anyReturned = true; // Se ha devuelto parcialmente este producto
        }
        return {
          ...product,
          quantity: remainingQuantity,
          returnedQuantity: (product.returnedQuantity || 0) + quantity,
          returnDate: returnDate || new Date()
        };
      } else {
        if (!product.returnedQuantity || product.returnedQuantity < product.quantity) {
          allReturned = false; // Otros productos no han sido completamente devueltos
        }
        return product;
      }
    });

    const updateData = { products: updatedProducts };
    if (allReturned) {
      updateData.status = 'Devuelto';
    } else if (anyReturned) {
      updateData.status = 'Parcialmente devuelto';
    }

    await updateDoc(orderRef, updateData);
    console.log(`Order ${orderId} updated with returns.`);
  } else {
    console.error('Order not found');
    throw new Error('Order not found');
  }
}



export async function getPendingOrders() {
  const q = query(collection(db, "orders"), where("status", "==", "Pendiente"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function acceptOrder(orderId, workerId) {
  const orderRef = doc(db, "orders", orderId);
  await updateDoc(orderRef, {
    status: "Aceptada",
    workerId: workerId
  });
}

export default{
  getOrdersByUserId,
  getPendingOrders,
  acceptOrder,
  deleteOrder,
  updateOrder,
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
  decreaseProductStock,
  decreaseStock,
  updateOrderAfterReturn
}