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
import { format } from 'date-fns';
import { getProductNameById } from './product';

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


export async function getOrdersRecord() {
  const ordersCollectionRef = collection(db, 'orders');
  try {
      const ordersSnapshot = await getDocs(ordersCollectionRef);
      const orders = ordersSnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data().createdAt ? format(doc.data().createdAt.toDate(), "PPpp") : 'Date not available'
      }));

      // Log de datos crudos directamente de Firestore
      console.log("Datos crudos de Firestore:", ordersSnapshot.docs.map(doc => doc.data()));

      // Log de los datos procesados con fechas formateadas
      console.log("Datos procesados:", orders);

      return orders;
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
const nuevoEstado = 'Etregado'; // Define el nuevo estado del pedido
updateOrderStatus(nuevoEstado);

export async function updateOrderAfterReturn(orderId, productId, quantity, returnDate) {
  const orderRef = doc(db, 'orders', orderId);
  const orderSnap = await getDoc(orderRef);

  if (orderSnap.exists()) {
    let allReturned = true;
    const products = orderSnap.data().products;
    const updatedProducts = products.map(product => {
      if (product.productId === productId) {
        const remainingQuantity = product.quantity - quantity;
        const returnedQuantity = (product.returnedQuantity || 0) + quantity;
        return {
          ...product,
          quantity: remainingQuantity,
          returnedQuantity: returnedQuantity,
          returnDate: returnDate || new Date() // Asegúrate de que returnDate siempre tenga un valor
        };
      } else {
        if (!product.returnedQuantity || product.returnedQuantity < product.quantity) {
          allReturned = false;
        }
        return product;
      }
    });

    const updateData = { products: updatedProducts };

    if (allReturned) {
      updateData.status = 'Devuelto';
    }

    if (updatedProducts.every(product => product.quantity !== undefined && product.returnedQuantity !== undefined)) {
      await updateDoc(orderRef, updateData);
      console.log(`Order ${orderId} updated with returns.`);
    } else {
      console.error('Some product updates have undefined values');
    }
  } else {
    console.error('Order not found');
    throw new Error('Order not found');
  }
}


export async function sellByProduct() {
  const ordersCollectionRef = collection(db, 'orders');
  try {
      const ordersSnapshot = await getDocs(ordersCollectionRef);
      const productCounts = {};

      for (const orderDoc of ordersSnapshot.docs) {
          const order = orderDoc.data();
          for (const product of order.products) {
              if (order.status !== "Devuelto" && order.status !== "Cancelado") {  // Filtra por productos no devueltos o cancelados
                  const productName = await getProductNameById(product.productId);  // Usa la función para obtener el nombre
                  if (!productCounts[productName]) {
                      productCounts[productName] = { totalUnits: 0, totalSales: 0 };
                  }
                  productCounts[productName].totalUnits += product.quantity;
                  productCounts[productName].totalSales += product.unitPrice * product.quantity;
              }
          }
      }

      // Convierte el objeto en un array de productos vendidos y ordena por unidades vendidas
      const sortedProducts = Object.keys(productCounts).map(key => ({
          productName: key,
          totalUnits: productCounts[key].totalUnits,
          totalSales: productCounts[key].totalSales
      })).sort((a, b) => b.totalUnits - a.totalUnits);

      return sortedProducts;
  } catch (error) {
      console.error("Error fetching product sales data:", error);
      throw new Error('Unable to fetch product sales data.');
  }
}

export async function calculateSelledItems() {
  const ordersCollectionRef = collection(db, 'orders');
  let totalItems = 0;

  try {
    const ordersSnapshot = await getDocs(ordersCollectionRef);
    ordersSnapshot.forEach(doc => {
      const order = doc.data();
      if (order.status === "Entregado") {
        order.products.forEach(product => {
          totalItems += product.quantity;
        });
      }
    });

    return totalItems;
  } catch (error) {
    console.error("Failed to count selled items:", error);
    throw new Error('Unable to count selled items.');
  }
}

export async function calculateTotalSell() {
  const ordersCollectionRef = collection(db, 'orders');
  let totalSales = 0;

  try {
    const ordersSnapshot = await getDocs(ordersCollectionRef);
    ordersSnapshot.forEach(doc => {
      const order = doc.data();
      if (order.status !== "Devuelto") {
        totalSales += order.totalPrice;
      }
    });

    return totalSales;
  } catch (error) {
    console.error("Failed to calculate total sales:", error);
    throw new Error('Unable to calculate total sales.');
  }
}

export async function allCanceledOrders() {
  const ordersCollectionRef = collection(db, 'orders');
  let count = 0;

  try {
    const ordersSnapshot = await getDocs(ordersCollectionRef);
    ordersSnapshot.forEach(doc => {
      const order = doc.data();
      if (order.status === "Devuelto") {
        count++;
      }
    });

    return count;
  } catch (error) {
    console.error("Failed to count canceled orders:", error);
    throw new Error('Unable to count canceled orders.');
  }
}

export default{
  getOrdersByUserId,
  getOrdersRecord,
  deleteOrder,
  updateOrder,
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
  decreaseProductStock,
  decreaseStock,
  updateOrderAfterReturn,
  calculateSelledItems,
  calculateTotalSell,
  allCanceledOrders
}