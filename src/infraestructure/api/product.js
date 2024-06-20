import { db } from "../firebase-connection.js";
import { Product } from "../../domain/Product.js";
import {
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    setDoc,
    writeBatch,
    query,
    where,
    runTransaction,
    serverTimestamp
} from "firebase/firestore";
import { storage } from "../firebase-connection";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as XLSX from 'xlsx';

/**
 * Utilidad para determinar el estado del producto basado en el stock.
 * @param {number} stock - Cantidad actual del stock del producto.
 * @returns {string} Estado del producto.
 */
function determineProductState(stock) {
    return stock > 0 ? "disponible" : "No disponible";
}

export async function getProducts() {
    const productsCollectionRef = collection(db, "products");
    let productsSnapshot;
    try {
        productsSnapshot = await getDocs(productsCollectionRef);
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products from Firestore");
    }

    const products = [];
    productsSnapshot.forEach((doc) => {
        const data = doc.data();

        const dateAdded = data.date_added ? data.date_added.toDate() : null;

        const product = new Product(
            doc.id,
            data.description,
            data.pictures,
            data.banner_pictures,
            data.CategoryID,
            data.product_name,
            data.stock,
            data.gramaje,
            data.unitary_price,
            dateAdded,
            data.state,
            data.ppp
        );

        products.push(product);
    });

    return products;
}

export async function getProductById(productId) {
    const productDocRef = doc(db, "products", productId);
    const productDoc = await getDoc(productDocRef);
    if (!productDoc.exists()) {
        const eliminatedProductDocRef = doc(db, "eliminated_products", productId);
        const eliminatedProductDoc = await getDoc(eliminatedProductDocRef);

        if (!eliminatedProductDoc.exists()) {
            throw new Error("Product not found");
        }

        const eliminatedProductData = eliminatedProductDoc.data();
        const dateAdded = eliminatedProductData.date_added?.toDate ? eliminatedProductData.date_added.toDate() : eliminatedProductData.date_added;
        return new Product(
            eliminatedProductDoc.id,
            eliminatedProductData.description,
            eliminatedProductData.pictures,
            eliminatedProductData.banner_pictures,
            eliminatedProductData.CategoryID,
            eliminatedProductData.product_name,
            eliminatedProductData.stock,
            eliminatedProductData.gramaje,
            eliminatedProductData.unitary_price,
            dateAdded,
            eliminatedProductData.state
        );
    }
    const productData = productDoc.data();
    const dateAdded = productData.date_added?.toDate ? productData.date_added.toDate() : productData.date_added;
    return new Product(
        productDoc.id,
        productData.description,
        productData.pictures,
        productData.banner_pictures,
        productData.CategoryID,
        productData.product_name,
        productData.stock,
        productData.gramaje,
        productData.unitary_price,
        dateAdded,
        productData.state
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
    const imageUrl = file ? await uploadImage(file) : null;

    const productState = determineProductState(productData.stock);

    const productDataForFirestore = {
        description: productData.description,
        pictures: imageUrl,
        banner_pictures: imageUrl,
        CategoryID: productData.CategoryID,
        product_name: productData.product_name,
        stock: productData.stock,
        date_added: serverTimestamp(),
        unitary_price: productData.unitary_price,
        gramaje: productData.gramaje,
        state: productState
    };

    if (!productDataForFirestore.CategoryID) {
        throw new Error("CategoryID is undefined or not set.");
    }

    const productRef = await addDoc(collection(db, "products"), productDataForFirestore);
    return productRef.id;
}

export async function updateProductStock(productId, quantityPurchased) {
    const productRef = doc(db, "products", productId);

    try {
        await runTransaction(db, async (transaction) => {
            const productDoc = await transaction.get(productRef);
            if (!productDoc.exists()) {
                throw new Error("El producto no existe en la base de datos.");
            }

            const currentStock = productDoc.data().stock;
            if (currentStock < quantityPurchased) {
                throw new Error("No hay suficiente stock disponible.");
            }

            const newStock = currentStock - quantityPurchased;
            transaction.update(productRef, { stock: newStock });
        });

        console.log("Stock actualizado correctamente.");
    } catch (error) {
        console.error("Error al actualizar el stock del producto:", error);
        throw error;
    }
}

export async function deleteProduct(productId) {
    const productDocRef = doc(db, "products", productId);
    const productDoc = await getDoc(productDocRef);

    if (!productDoc.exists()) {
        throw new Error("Product not found");
    }

    const productData = productDoc.data();
    const eliminatedProductDocRef = doc(db, "eliminated_products", productId);

    await setDoc(eliminatedProductDocRef, productData);
    await deleteDoc(productDocRef);
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

export async function getCategories() {
    const categoriesCollectionRef = collection(db, "product_categories");
    const categoriesSnapshot = await getDocs(categoriesCollectionRef);
    const categories = [];
    categoriesSnapshot.forEach((doc) => {
        categories.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return categories;
}

export const readExcelFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const products = XLSX.utils.sheet_to_json(sheet);
            resolve(products);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsBinaryString(file);
    });
};

export const calculatePMP = (unitaryPrice, stock, costoLote) => {
    return (unitaryPrice * stock) - costoLote;
};

export const addProductsBatch = async (products) => {
    const batch = writeBatch(db);
    const ids = [];
    const uploadPromises = [];

    for (const product of products) {
        const newDocRef = doc(collection(db, "products"));
        ids.push(newDocRef.id);

        if (product.pictureUrl) {
            const uploadPromise = fetch(product.pictureUrl)
                .then(res => res.blob())
                .then(blob => {
                    const fileRef = ref(storage, `products/${newDocRef.id}`);
                    return uploadBytes(fileRef, blob);
                })
                .then(snapshot => getDownloadURL(snapshot.ref))
                .then(url => {
                    const productData = {
                        ...product,
                        pictures: url,
                        banner_pictures: url
                    };
                    batch.set(newDocRef, productData);
                })
                .catch(error => {
                    console.error("Failed to upload image, saving product without image:", error);
                    const productData = {
                        ...product,
                        pictures: null,
                        banner_pictures: null
                    };
                    batch.set(newDocRef, productData);
                });
            uploadPromises.push(uploadPromise);
        } else {
            const productData = {
                ...product,
                pictures: null,
                banner_pictures: null
            };
            batch.set(newDocRef, productData);
        }
    }

    await Promise.all(uploadPromises);
    await batch.commit();
    return ids;
};

export async function getProductNameById(productId) {
    const productDocRef = doc(db, "products", productId);
    const productDoc = await getDoc(productDocRef);

    if (!productDoc.exists()) {
        const eliminatedProductDocRef = doc(db, "eliminated_products", productId);
        const eliminatedProductDoc = await getDoc(eliminatedProductDocRef);

        if (!eliminatedProductDoc.exists()) {
            throw new Error("Product not found");
        }

        const eliminatedProductData = eliminatedProductDoc.data();
        return eliminatedProductData.product_name;
    }

    const productData = productDoc.data();
    return productData.product_name;
}

export async function getProductByName(productName) {
    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("product_name", "==", productName));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty ? null : { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
}

export async function addProductStock(productId, quantity) {
    const productRef = doc(db, 'products', productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
        const currentStock = Number(productSnap.data().stock);
        const addQuantity = Number(quantity);
        const newStock = currentStock + addQuantity;

        await updateDoc(productRef, {
            stock: newStock
        });
        console.log(`Stock updated for product ${productId}: ${newStock}`);
    } else {
        console.error('Product not found');
        throw new Error('Product not found');
    }
}

export const calculatePPP = (costoLote, stock) => {
    return stock !== 0 ? costoLote / stock : 0;
};

export default {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    readExcelFile,
    calculatePMP,
    updateProductStock,
    addProductsBatch,
    getProductNameById,
    getProductByName,
    addProductStock,
    calculatePPP
};
