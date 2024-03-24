import { db } from '../firebase-connection.js';
import { SellByProduct } from '../../domain/SellByProduct.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function getSellByProducts() {
    const sellByProductsCollectionRef = collection(db, 'sell_by_products');
    const sellByProductsSnapshot = await getDocs(sellByProductsCollectionRef);
    const sellByProducts = [];
    sellByProductsSnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        const sellByProduct = new SellByProduct(
            docSnap.id,
            data.product_id,
            data.product_amount,
            data.total_sell
        );
        sellByProducts.push(sellByProduct);
    });
    return sellByProducts;
}

export async function getSellByProductById(sellByProductId) {
    const sellByProductDocRef = doc(db, 'sell_by_products', sellByProductId);
    const sellByProductDoc = await getDoc(sellByProductDocRef);
    if (!sellByProductDoc.exists()) {
        throw new Error('SellByProduct not found');
    }
    const data = sellByProductDoc.data();
    return new SellByProduct(
        sellByProductDoc.id,
        data.product_id,
        data.product_amount,
        data.total_sell
    );
}

export async function createSellByProduct(sellByProductData) {
    const newSellByProduct = new SellByProduct(
        null,
        sellByProductData.product_id,
        sellByProductData.product_amount,
        sellByProductData.total_sell
    );

    const sellByProductDataForFirestore = newSellByProduct.toFirestore();
    const docRef = await addDoc(collection(db, 'sell_by_products'), sellByProductDataForFirestore);
    return docRef.id;
}

export async function updateSellByProduct(sellByProductId, updatedData) {
    const sellByProductDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value;
        return acc;
    }, {});

    await updateDoc(doc(db, 'sell_by_products', sellByProductId), sellByProductDataForFirestore);
}

export async function deleteSellByProduct(sellByProductId) {
    const sellByProductDocRef = doc(db, 'sell_by_products', sellByProductId);
    await deleteDoc(sellByProductDocRef);
}

export default {
    getSellByProducts,
    getSellByProductById,
    createSellByProduct,
    updateSellByProduct,
    deleteSellByProduct
};