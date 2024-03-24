import { db } from '../firebase-connection.js';
import { Offer } from '../../domain/Offer.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function getOffers() {
    const offersCollectionRef = collection(db, 'offers');
    const offersSnapshot = await getDocs(offersCollectionRef);
    const offers = [];
    offersSnapshot.forEach((doc) => {
        const data = doc.data();
        const offer = new Offer(
            doc.id,
            data.product_category_id,
            data.description,
            data.percentage,
            data.amount
        );
        offers.push(offer);
    })
    return offers;
}

export async function getOfferById(offerId) {
    const offerDocRef = doc(db, 'offers', offerId);
    const offerDoc = await getDoc(offerDocRef);
    if (!offerDoc.exists()) throw new Error('Offer not found');
    return new Offer(
        offerDoc.id,
        offerDoc.data().product_category_id,
        offerDoc.data().description,
        offerDoc.data().percentage,
        offerDoc.data().amount
    );
}

export async function createOffer(offerData) {
    const newOffer = new Offer(
        null,
        offerData.product_category_id,
        offerData.description,
        offerData.percentage,
        offerData.amount
    );

    const offerDataForFirestore = newOffer.toFirestore();
    const docRef = await addDoc(collection(db, 'offers'), offerDataForFirestore);
    newOffer.id = docRef.id;
    return docRef.id;
}

export async function updateOffer(offerId, updatedData) {
    const offerDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value;
        return acc;
    }, {});

    await updateDoc(doc(db, 'offers', offerId), offerDataForFirestore);
}

export async function deleteOffer(offerId) {
    const deleteDocRef = doc(db, 'offers', offerId);
    await deleteDoc(deleteDocRef);
}

export default {
    getOffers,
    getOfferById,
    createOffer,
    updateOffer,
    deleteOffer
};
