import { db, storage } from '../firebase-connection.js';
import { ProductCategory } from "../../domain/ProductCategory.js";
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function getProductCategories() {
    const productCategoryCollectionRef = collection(db, 'product_categories');
    const productCategoriesSnapshot = await getDocs(productCategoryCollectionRef);
    const productCategories = [];
    productCategoriesSnapshot.forEach((doc) => {
        const data = doc.data();
        const productCategory = new ProductCategory(
            doc.id,
            data.description,
            data.name,
            data.picture
        );
        productCategories.push(productCategory);
    });
    return productCategories;
}

export async function getProductCategoryById(categoryId) {
    if (!categoryId) {
        console.error("getProductCategoryById fue llamado sin un ID de categoría.");
        throw new Error("Se requiere el ID de la categoría del producto");
    }

    const categoryDocRef = doc(db, 'product_categories', categoryId);
    try {
        const categoryDoc = await getDoc(categoryDocRef);
        if (!categoryDoc.exists()) {
            throw new Error("Categoría del producto no encontrada");
        }
        const data = categoryDoc.data();

        return { id: categoryDoc.id, ...data };
    } catch (error) {
        console.error("Fallo al obtener la categoría del producto:", error);
        throw error;
    }
}

export async function createProductCategory(productCategoryData) {
    const newProductCategory = new ProductCategory(
        null,
        productCategoryData.description,
        productCategoryData.name,
        productCategoryData.picture
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
