import { db } from "../firebase-connection";
import { ProfitPerLot } from "../../domain/ProfitPerLot";
import {
    collection,
    doc,
    getDoc,
    writeBatch,
    updateDoc,
    deleteDoc,
    getDocs,
    Timestamp,
    serverTimestamp
} from "firebase/firestore";

export async function addProfitPerLot(data) {
    const productRef = doc(db, "products", data.id_product);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
        throw new Error("Product not found");
    }

    const productData = productSnap.data();
    if (productData.stock === undefined || productData.ppp === undefined) {
        throw new Error("Product data is incomplete, missing stock or ppp");
    }

    const newTotalQuantity = productData.stock + data.quantity;
    console.log("Product PPP:", productData.ppp, "Type:", typeof productData.ppp);
    console.log("Product Stock:", productData.stock, "Type:", typeof productData.stock);
    console.log("Data Cost:", data.cost, "Type:", typeof data.cost);
    console.log("Data Quantity:", data.quantity, "Type:", typeof data.quantity);
    console.log("New Total Quantity:", newTotalQuantity, "Type:", typeof newTotalQuantity);

    const newPPP = ((productData.ppp * productData.stock) + (data.cost * data.quantity)) / newTotalQuantity;
    console.log("New PPP:", newPPP);

    const batch = writeBatch(db);
    batch.update(productRef, {
        stock: newTotalQuantity,
        ppp: newPPP
    });

    const profitRef = doc(collection(db, "profits_per_lot"));
    const newProfitPerLot = new ProfitPerLot(
        profitRef.id,
        data.cost,
        data.quantity,
        data.id_product,
        data.profit,
        data.total_sell,
        serverTimestamp(), // Usar serverTimestamp para asegurar la coherencia de las zonas horarias
        newPPP
    );

    batch.set(profitRef, newProfitPerLot.toFirestore());
    await batch.commit();
    console.log(`PPP updated to ${newPPP} and profit lot added with quantity ${data.quantity}.`);
    return `Profit lot added with new PPP: ${newPPP} and quantity ${data.quantity}`;
}

export async function getProfitPerLotById(id) {
    const docRef = doc(db, "profits_per_lot", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error("No such profit per lot found");
    }

    const data = docSnap.data();
    return new ProfitPerLot(docSnap.id, data.cost, data.quantity, data.id_product, data.profit, data.total_sell, data.time.toDate(), data.ppp);
}

export async function updateProfitPerLot(id, newData) {
    if (newData.time) newData.time = Timestamp.fromDate(newData.time);
    const profitPerLotRef = doc(db, "profits_per_lot", id);
    await updateDoc(profitPerLotRef, newData);
    return `ProfitPerLot with ID ${id} updated successfully.`;
}

export async function deleteProfitPerLot(id) {
    const profitPerLotRef = doc(db, "profits_per_lot", id);
    await deleteDoc(profitPerLotRef);
    return `ProfitPerLot with ID ${id} deleted successfully.`;
}

export async function getAllProfitPerLot() {
    const collectionRef = collection(db, "profits_per_lot");
    const snapshot = await getDocs(collectionRef);
    const profitList = [];
    snapshot.forEach(doc => {
        const data = doc.data();
        profitList.push(new ProfitPerLot(
            doc.id,
            data.cost,
            data.quantity,
            data.id_product,
            data.profit,
            data.total_sell,
            data.time.toDate(),
            data.ppp
        ));
    });
    return profitList;
}

export default {
    addProfitPerLot,
    getProfitPerLotById,
    updateProfitPerLot,
    deleteProfitPerLot,
    getAllProfitPerLot
};
