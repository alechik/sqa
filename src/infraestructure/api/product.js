import { db } from "../firebase-connection.js";
import { Product } from "../../domain/Product.js";
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

async function getProducts() {
    const productsCollectionRef = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollectionRef);
    const products = [];
    productsSnapshot.forEach((doc) => {
        const data = doc.data();
        const product = new Product(
            doc.id,
            data.description,
            data.pictures,
            data.product_category_id,
            data.product_name,
            data.stock,
            data.unitary_price
        );
        products.push(product);
    });
    return products;
}

async function getProductById(productId) {
    const productDocRef = doc(db, "products", productId);
    const productDoc = await getDoc(productDocRef);
    if (!productDoc.exists()) {
        throw new Error("Product not found");
    }
    const productData = productDoc.data();
    return new Product(
        productDoc.id,
        productData.description,
        productData.pictures,
        productData.product_category_id,
        productData.product_name,
        productData.stock,
        productData.unitary_price
    );
}

async function createProduct(productData) {
    const newProduct = new Product(
        null,
        productData.description,
        productData.pictures,
        productData.product_category_id,
        productData.product_name,
        productData.stock,
        productData.unitary_price
    );

    const productDataForFirestore = newProduct.toFirestore();

    const productRef = await addDoc(collection(db, "products"), productDataForFirestore);
    newProduct.id = productRef.id;
    return productRef.id;
}

async function updateProduct(productId, updatedData) {
    const productDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) {
            acc[key] = value;
        }
        return acc;
    }, {});

    const productDocRef = doc(db, "products", productId);
    await updateDoc(productDocRef, productDataForFirestore);
}

async function deleteProduct(productId) {
    const productDocRef = doc(db, "products", productId);
    await deleteDoc(productDocRef);
}

export {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};