import { db } from '../firebase-connection.js';
import { ProductRating } from '../../domain/ProductRating.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function getProductRatings() {
    const productRatingsCollectionRef = collection(db, 'product_ratings');
    const productRatingsSnapshot = await getDocs(productRatingsCollectionRef);
    const productRatings = [];
    productRatingsSnapshot.forEach((doc) => {
        const data = doc.data();
        const productRating = new ProductRating(
            doc.id,
            data.product_id,
            data.rating,
            data.date,
            data.user_id
        );
        productRatings.push(productRating);
    })
    return productRatings;
}

export async function getProductRatingById(productRatingId) {
    const productRatingDocRef = doc(db, 'product_ratings', productRatingId);
    const productRatingDoc = await getDoc(productRatingDocRef);
    if (!productRatingDoc.exists()) throw new Error('Product rating not found');
    return new ProductRating(
        productRatingDoc.id,
        productRatingDoc.data().product_id,
        productRatingDoc.data().rating,
        productRatingDoc.data().date,
        productRatingDoc.data().user_id
    );
}

export async function createProductRating(productRatingData) {
    const newProductRating = new ProductRating(
        null,
        productRatingData.product_id,
        productRatingData.rating,
        productRatingData.date,
        productRatingData.user_id
    );

    const productRatingDataForFirestore = newProductRating.toFirestore();
    const docRef = await addDoc(collection(db, 'product_ratings'), productRatingDataForFirestore);
    newProductRating.id = docRef.id;
    return docRef.id;
}

export async function updateProductRating(productRatingId, updatedData) {
    const productRatingDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value;
        return acc;
    }, {});

    await updateDoc(doc(db, 'product_ratings', productRatingId), productRatingDataForFirestore);
}

export async function deleteProductRating(productRatingId) {
    const productRatingRef = doc(db, 'product_ratings', productRatingId);
    await deleteDoc(productRatingRef);
}

export default {
    getProductRatings,
    getProductRatingById,
    createProductRating,
    updateProductRating,
    deleteProductRating
}