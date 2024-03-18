import { db } from './firebase-connection.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Delivery } from '../../domain/delivery.js';

async function getDeliveries() {
    const querySnapshot = await getDocs(collection(db, 'deliveries'));
    return querySnapshot.docs.map(docSnap => new Delivery(docSnap.id, docSnap.data().userId, docSnap.data().delivered, docSnap.data().deliveryAddress, docSnap.data().deliveryDetailId));
}

async function getDeliveryById(deliveryId) {
    const docSnap = await getDoc(doc(db, 'deliveries', deliveryId));
    if (!docSnap.exists()) throw new Error('Delivery not found');
    return new Delivery(docSnap.id, docSnap.data().userId, docSnap.data().delivered, docSnap.data().deliveryAddress, docSnap.data().deliveryDetailId);
}

async function createDelivery(deliveryData) {
    const docRef = await addDoc(collection(db, 'deliveries'), deliveryData);
    return new Delivery(docRef.id, deliveryData.userId, deliveryData.delivered, deliveryData.deliveryAddress, deliveryData.deliveryDetailId);
}

async function updateDelivery(deliveryId, updatedData) {
    await updateDoc(doc(db, 'deliveries', deliveryId), updatedData);
}

async function deleteDelivery(deliveryId) {
    await deleteDoc(doc(db, 'deliveries', deliveryId));
}

export {
    getDeliveries,
    getDeliveryById,
    createDelivery,
    updateDelivery,
    deleteDelivery
};