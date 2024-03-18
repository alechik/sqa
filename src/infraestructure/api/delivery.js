import { db } from './firebase-connection.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Delivery } from '../../domain/Delivery.js';

async function getDeliveries() {
    const deliveriesCollectionRef = collection(db, 'deliveries');
    const deliveriesSnapshot = await getDocs(deliveriesCollectionRef);
    return deliveriesSnapshot.docs.map(docSnap => new Delivery(
        docSnap.id,
        docSnap.data().userId,
        docSnap.data().delivered,
        docSnap.data().deliveryAddress,
        docSnap.data().deliveryDetailId
    ));
}

async function getDeliveryById(deliveryId) {
    const deliveryDocRef = doc(db, 'deliveries', deliveryId);
    const deliveryDoc = await getDoc(deliveryDocRef);
    if (!deliveryDoc.exists()) throw new Error('Delivery not found');
    return new Delivery(
        deliveryDoc.id,
        deliveryDoc.data().userId,
        deliveryDoc.data().delivered,
        deliveryDoc.data().deliveryAddress,
        deliveryDoc.data().deliveryDetailId
    );
}

async function createDelivery(deliveryData) {
    const newDelivery = new Delivery(
        null,
        deliveryData.userId,
        deliveryData.delivered,
        deliveryData.deliveryAddress,
        deliveryData.deliveryDetailId
    );

    const deliveryDataForFirestore = newDelivery.toFirestore();
    const docRef = await addDoc(collection(db, 'deliveries'), deliveryDataForFirestore);
    newDelivery.id = docRef.id;
    return docRef.id;
}

async function updateDelivery(deliveryId, updatedData) {
    const deliveryDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value; // Filtra campos undefined
        return acc;
    }, {});

    await updateDoc(doc(db, 'deliveries', deliveryId), deliveryDataForFirestore);
}

async function deleteDelivery(deliveryId) {
    const delivertDocRef = doc(db, 'deliveries', deliveryId)
    await deleteDoc(delivertDocRef);
}

export default{
    getDeliveries,
    getDeliveryById,
    createDelivery,
    updateDelivery,
    deleteDelivery
};