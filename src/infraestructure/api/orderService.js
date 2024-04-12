// services/orderService.js
import { db } from '../firebase-config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

/**
 * Coloca un nuevo pedido en la base de datos.
 * @param {Object} orderData - Los datos del pedido a crear.
 * @returns {Promise<string>} - La promesa que resuelve el ID del nuevo pedido creado.
 */
async function placeOrder(orderData) {
  try {
    const ordersCollectionRef = collection(db, 'orders');
    const newOrder = {
      ...orderData,
      createdAt: Timestamp.now(), // Añade la fecha actual como timestamp de Firestore
    };
    const docRef = await addDoc(ordersCollectionRef, newOrder);
    return docRef.id; // Retorna el ID del documento recién creado
  } catch (error) {
    throw new Error(`Error placing order: ${error.message}`);
  }
}

export { placeOrder };
