import { db } from '../firebase-connection.js';
import { DeliveryDetail } from '../../domain/DeliveryDetail.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function getDeliveryDetails() {
    const deliveryDetailsCollectionRef = collection(db, 'delivery_details');
    const deliveryDetailsSnapshot = await getDocs(deliveryDetailsCollectionRef);
    const deliveryDetails = [];
    deliveryDetailsSnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        const deliveryDetail = new DeliveryDetail(
            docSnap.id,
            data.sell_by_product_id,
            data.total_sell,
            data.date
        );
        deliveryDetails.push(deliveryDetail);
    });
    return deliveryDetails;
}

export async function getDeliveryDetailById(deliveryDetailId) {
    const deliveryDetailDocRef = doc(db, 'delivery_details', deliveryDetailId);
    const deliveryDetailDoc = await getDoc(deliveryDetailDocRef);
    if (!deliveryDetailDoc.exists()) {
        throw new Error('Delivery detail not found');
    }
    return new DeliveryDetail(
        deliveryDetailDoc.id,
        deliveryDetailDoc.data().sell_by_product_id,
        deliveryDetailDoc.data().total_sell,
        deliveryDetailDoc.data().date
    );
}

export async function createDeliveryDetail(deliveryDetailData) {
    const newDeliveryDetail = new DeliveryDetail(
        null,
        deliveryDetailData.sell_by_product_id,
        deliveryDetailData.total_sell,
        deliveryDetailData.date
    );

    const deliveryDetailDataForFirestore = newDeliveryDetail.toFirestore();
    const docRef = await addDoc(collection(db, 'delivery_details'), deliveryDetailDataForFirestore);
    newDeliveryDetail.id = docRef.id;
    return docRef.id;
}

export async function updateDeliveryDetail(deliveryDetailId, updatedData) {
    const deliveryDetailDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value;
        return acc;
    }, {});

    await updateDoc(doc(db, 'delivery_details', deliveryDetailId), deliveryDetailDataForFirestore);
}

export async function deleteDeliveryDetail(deliveryDetailId) {
    const deliveryDetailDocRef = doc(db, 'delivery_details', deliveryDetailId);
    await deleteDoc(deliveryDetailDocRef);
}

export async function getDeliveryDetailByDelivery(deliveryId) {
    const delivery = await getDeliveryById(deliveryId);
    const detailRef = delivery.delivery_detail_id; // Suponiendo que delivery_detail_id es una referencia directa.
    const detailDoc = await getDoc(detailRef);
    
    if (!detailDoc.exists()) throw new Error('Delivery detail not found');
    return {
        detailId: detailDoc.id,
        ...detailDoc.data()
    };
}


export default {
    getDeliveryDetails,
    getDeliveryDetailById,
    createDeliveryDetail,
    updateDeliveryDetail,
    deleteDeliveryDetail,
    getDeliveryDetailByDelivery
};