import { db } from "../firebase-connection";
import { ProfitPerLot } from "../../domain/ProfitPerLot";
import { collection, doc, getDoc, addDoc, updateDoc, deleteDoc, getDocs, Timestamp } from "firebase/firestore";

export async function addProfitPerLot(data) {
    const newProfitPerLot = new ProfitPerLot(
        null, // ID se genera automáticamente
        data.cost,
        data.id_product,
        data.profit,
        data.total_sell,
        Timestamp.fromDate(new Date()) // Guarda la fecha y hora actual como un Timestamp de Firestore
    );
    const docRef = await addDoc(collection(db, "profits_per_lot"), newProfitPerLot.toFirestore());
    return docRef.id;
}

export async function getProfitPerLotById(id) {
    const docRef = doc(db, "profits_per_lot", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error("No such profit per lot found");
    }

    const data = docSnap.data();
    return new ProfitPerLot(docSnap.id, data.cost, data.id_product, data.profit, data.total_sell, data.time.toDate());
}

export async function updateProfitPerLot(id, newData) {
    if (newData.time) newData.time = Timestamp.fromDate(newData.time); // Asegúrate de convertir la fecha a Timestamp si es necesario
    const profitPerLotRef = doc(db, "profits_per_lot", id);
    await updateDoc(profitPerLotRef, newData);
    return `ProfitPerLot with ID ${id} updated successfully.`;
}

// Function to delete a ProfitPerLot record
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
        profitList.push(new ProfitPerLot(doc.id, data.cost, data.id_product, data.profit, data.total_sell, data.time.toDate()));
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
