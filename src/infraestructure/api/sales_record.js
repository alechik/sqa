import { db } from '../firebase-connection.js';
import { SalesRecord } from '../../domain/SalesRecord.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export async function getSalesRecords() {
    const salesRecordsCollectionRef = collection(db, "sales_records");
    const salesRecordsSnapshot = await getDocs(salesRecordsCollectionRef);
    const salesRecords = [];
    salesRecordsSnapshot.forEach((doc) => {
        const data = doc.data();
        const salesRecord = new SalesRecord(
            doc.id,
            data.user_id,
            data.delivery_id
        );
        salesRecords.push(salesRecord);
    });
    return salesRecords;
}

export async function getSalesRecordById(salesRecordId) {
    const salesRecordDocRef = doc(db, "sales_records", salesRecordId);
    const salesRecordDoc = await getDoc(salesRecordDocRef);
    if (!salesRecordDoc.exists()) {
        throw new Error("Sales record not found");
    }
    return new SalesRecord(
        salesRecordDoc.id,
        salesRecordDoc.data().user_id,
        salesRecordDoc.data().delivery_id
    );
}

export async function createSalesRecord(salesRecordData) {
    const newSalesRecord = new SalesRecord(
        null,
        salesRecordData.user_id,
        salesRecordData.delivery_id
    );

    const salesRecordDataForFirestore = newSalesRecord.toFirestore();
    const docRef = await addDoc(collection(db, "sales_records"), salesRecordDataForFirestore);
    newSalesRecord.id = docRef.id;
    return docRef.id;
}

export async function updateSalesRecord(salesRecordId, updatedData) {
    const salesRecordDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value;
        return acc;
    }, {});

    await updateDoc(doc(db, "sales_records", salesRecordId), salesRecordDataForFirestore);
}

export async function deleteSalesRecord(salesRecordId) {
    const salesRecordDocRef = doc(db, 'sales_records', salesRecordId);
    await deleteDoc(salesRecordDocRef);
}

export default {
    getSalesRecords,
    getSalesRecordById,
    createSalesRecord,
    updateSalesRecord,
    deleteSalesRecord
}