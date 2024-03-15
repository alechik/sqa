// Importaciones necesarias de Firebase
import { db } from "../firebase-connection.js";
import { Product } from "../../domain/Product.js";
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Función para obtener todos los productos
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

// Función para obtener un producto por su ID
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

// Función para crear un nuevo producto
async function createProduct(productData) {
    const productsCollectionRef = collection(db, "products");
    const productRef = await addDoc(productsCollectionRef, productData);
    return productRef.id;
}

// Función para actualizar un producto existente
async function updateProduct(productId, updatedData) {
    const productDocRef = doc(db, "products", productId);
    await updateDoc(productDocRef, updatedData);
}

// Función para eliminar un producto
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
