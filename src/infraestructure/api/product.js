import { db } from "../firebase-connection.js";
import { Product } from "../../domain/Product.js";
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { storage } from "../firebase-connection"; // Importa la referencia a tu instancia de Firebase Storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function getProducts() {
    const productsCollectionRef = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollectionRef);
    const products = [];
    productsSnapshot.forEach((doc) => {
        const data = doc.data();
        const product = new Product(
            doc.id,
            data.description,
            data.pictures,
            data.banner_pictures,
            data.product_category_id,
            data.product_name,
            data.stock,
            data.price_id,
            data.state
        );
        products.push(product);
    });
    return products;
}

export async function getProductById(productId) {
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
        productData.banner_pictures,
        productData.product_category_id,
        productData.product_name,
        productData.stock,
        productData.price_id,
        productDoc.state
    );
}


export async function uploadImage(file) {
    if (!file) {
        throw new Error("No file provided for upload.");
    }
    const storageRef = ref(storage, `products/${file.name}`);
    const uploadResult = await uploadBytes(storageRef, file);
    return getDownloadURL(uploadResult.ref);
}

export async function createProduct(productData, file) {
    // Primero, carga la imagen al storage y obtiene la URL
    const imageUrl = await uploadImage(file);
    const banner_imageUrl = await uploadImage(file);

    // Crea el objeto product con la URL de la imagen incluida
    const newProduct = new Product(
        null,
        productData.description,
        imageUrl,
        banner_imageUrl, // Usa la URL de la imagen cargada
        productData.product_category_id,
        productData.product_name,
        productData.stock,
        productData.price_id,
        productData.state
    );

    // Prepara los datos para Firestore
    const productDataForFirestore = {
        description: newProduct.description,
        pictures: newProduct.pictures,
        banner_pictures: newProduct.banner_pictures, // Este es ahora la URL de la imagen
        product_category_id: newProduct.product_category_id,
        product_name: newProduct.product_name,
        stock: newProduct.stock,
        price_id: newProduct.price_id,
        state: newProduct.state
    };

    // Guarda el producto en Firestore
    const productRef = await addDoc(collection(db, "products"), productDataForFirestore);
    return productRef.id; // Retorna el ID del nuevo producto
}

export async function updateProduct(productId, updatedData) {
    const productDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) {
            acc[key] = value;
        }
        return acc;
    }, {});

    const productDocRef = doc(db, "products", productId);
    await updateDoc(productDocRef, productDataForFirestore);
}

export async function deleteProduct(productId) {
    const productDocRef = doc(db, "products", productId);
    await deleteDoc(productDocRef);
}

export default {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};

