import { db } from '../firebase-connection.js';
import { ProductCategory } from "../../domain/ProductCategory.js";
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function getProductCategories() {
    const productCategoryCollectionRef = collection(db, 'product_categories');
    const productCategoriesSnapshot = await getDocs(productCategoryCollectionRef);
    const productCategories = [];
    productCategoriesSnapshot.forEach((doc) => {
        const data = doc.data();
        const productCategory = new ProductCategory(
            doc.id,
            data.description,
            data.name
        );
        productCategories.push(productCategory);
    });
    return productCategories;
}

export async function getProductCategoryById(productCategoryId) {
    if (!productCategoryId) {
        console.error("getProductCategoryById was called without a category ID.");
        throw new Error("Product category ID is required");
    }

    const productCategoryDocRef = doc(db, 'product_categories', productCategoryId);
    try {
        const productCategoryDoc = await getDoc(productCategoryDocRef);
        if (!productCategoryDoc.exists()) {
            throw new Error("Product category not found");
        }
        const productCategoryData = productCategoryDoc.data();
        return new ProductCategory(
            productCategoryDoc.id,
            productCategoryData.description,
            productCategoryData.name
        );
    } catch (error) {
        console.error("Failed to fetch product category:", error);
        throw error; // Esto asegurará que el error se maneje más arriba en la cadena de llamadas
    }
}


export async function createProductCategory(productCategoryData) {
    const newProductCategory = new ProductCategory(
        null,
        productCategoryData.description,
        productCategoryData.name
    );

    const productCategoryDataForFirestore = newProductCategory.toFirestore();

    const docRef = await addDoc(collection(db, 'product_categories'), productCategoryDataForFirestore);
    newProductCategory.id = docRef.id;
    return docRef.id;
}

export async function updateProductCategory(productCategoryId, updatedData) {
    const productDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value;
        return acc;
    }, {});

    await updateDoc(doc(db, 'product_categories', productCategoryId), productDataForFirestore);
}

export async function deleteProductCategory(productCategoryId) {
    await deleteDoc(doc(db, 'product_categories', productCategoryId));
}

export default {
    getProductCategories,
    getProductCategoryById,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
};