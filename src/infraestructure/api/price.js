import { db } from '../firebase-connection.js';
import { Price } from '../../domain/Price.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function getPrices() {
    const pricesCollectionRef = collection(db, 'prices');
    const pricesSnapshot = await getDocs(pricesCollectionRef);
    const prices = [];
    pricesSnapshot.forEach((doc) => {
        const data = doc.data();
        const price = new Price(
            doc.id,
            data.offer_id,
            data.current_price,
            data.last_price,
            data.currency,
            data.update_date
        );
        prices.push(price);
    });
    return prices;
}

export async function getPriceById(priceId) {
    const priceDocRef = doc(db, 'prices', priceId);
    const priceDoc = await getDoc(priceDocRef);
    if (!priceDoc.exists()) {
        throw new Error('Price not found');
    }
    return new Price(
        priceDoc.id,
        priceDoc.data().offer_id,
        priceDoc.data().current_price,
        priceDoc.data().last_price,
        priceDoc.data().currency,
        priceDoc.data().update_date
    );
}

export async function createPrice(priceData) {
    const newPrice = new Price(
        null,
        priceData.offer_id,
        priceData.current_price,
        priceData.last_price,
        priceData.currency,
        priceData.update_date
    );

    const priceDataForFirestore = newPrice.toFirestore();
    const docRef = await addDoc(collection(db, 'prices'), priceDataForFirestore);
    newPrice.id = docRef.id;
    return docRef.id;
}

export async function updatePrice(priceId, updatedData) {
    const priceDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value;
        return acc;
    }, {});

    await updateDoc(doc(db, 'prices', priceId), priceDataForFirestore);
}

export async function deletePrice(priceId) {
    const priceDocRef = doc(db, 'prices', priceId);
    await deleteDoc(priceDocRef);
}

export default {
    getPrices,
    getPriceById,
    createPrice,
    updatePrice,
    deletePrice
};
