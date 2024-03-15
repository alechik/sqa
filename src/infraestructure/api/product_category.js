// product_category.js
import { db } from '../firebase-connection.js';
import { ProductCategory } from "../../domain/ProductCategory.js";
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

async function getProductCategories() {
    const querySnapshot = await getDocs(collection(db, 'product_categories'));
    return querySnapshot.docs.map(docSnap => new ProductCategory(docSnap.id, docSnap.data().description, docSnap.data().name));
}

async function getProductCategoryById(productCategoryId) {
    const docSnap = await getDoc(doc(db, 'product_categories', productCategoryId));
    if (!docSnap.exists()) throw new Error('Product category not found');
    return new ProductCategory(docSnap.id, docSnap.data().description, docSnap.data().name);
}

async function createProductCategory(productCategoryData) {
    const docRef = await addDoc(collection(db, 'product_categories'), {
        name: productCategoryData.name,
        description: productCategoryData.description
    });
    return new ProductCategory(docRef.id, productCategoryData.description, productCategoryData.name);
}

async function updateProductCategory(productCategoryId, updatedData) {
    await updateDoc(doc(db, 'product_categories', productCategoryId), updatedData);
}

async function deleteProductCategory(productCategoryId) {
    await deleteDoc(doc(db, 'product_categories', productCategoryId));
}

export {
    getProductCategories,
    getProductCategoryById,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
};
