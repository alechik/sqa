import { db } from '../firebase-connection.js';
import { ProductRating } from '../../domain/ProductRating.js';
import {collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, where} from "firebase/firestore";

export async function fetchRatingsForProduct(productId) {
    try {
        const ratingsRef = collection(db, "products_ratings");
        const q = query(ratingsRef, where("product_id", "==", productId));
        const querySnapshot = await getDocs(q);
        let totalRating = 0;
        let count = 0;

        querySnapshot.forEach((doc) => {
            totalRating += doc.data().rating; // Asume que cada documento tiene un campo 'rating' que es un número
            count++;
        });

        if (count === 0) {
            return 0; // Retorna 0 si no hay calificaciones para evitar división por cero
        }

        const averageRating = totalRating / count;
        return averageRating; // Retorna el promedio calculado
    } catch (error) {
        console.error("Error fetching product ratings:", error);
        return 0; // En caso de error, podría ser conveniente retornar un valor por defecto
    }
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
    getProductRatingById,
    createProductRating,
    updateProductRating,
    deleteProductRating,
    fetchRatingsForProduct
}