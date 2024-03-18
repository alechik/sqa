import { db } from '../firebase-connection.js';
import { SalesRecord } from '../domain/SalesRecord.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

async function getSalesRecords() {
    const salesRecordsCollectionRef = collection(db, 'sales_records');
    const querySnapshot = await getDocs(salesRecordsCollectionRef);
    return querySnapshot.docs.map(docSnap => new SalesRecord(docSnap.id, docSnap.data().userId, docSnap.data().deliveryIds));
}

async function getSalesRecordById(salesRecordId) {
    const salesRecordDocRef = doc(db, 'sales_records', salesRecordId);
    const docSnap = await getDoc(salesRecordDocRef);
    if (!docSnap.exists()) throw new Error('Sales record not found');
    return new SalesRecord(docSnap.id, docSnap.data().userId, docSnap.data().deliveryIds);
}

async function createSalesRecord(salesRecordData) {
    const salesRecordsCollectionRef = collection(db, 'sales_records');
    const docRef = await addDoc(salesRecordsCollectionRef, salesRecordData);
    return new SalesRecord(docRef.id, salesRecordData.userId, salesRecordData.deliveryIds);
}

async function updateSalesRecord(salesRecordId, updatedData) {
    const salesRecordDocRef = doc(db, 'sales_records', salesRecordId);
    await updateDoc(salesRecordDocRef, updatedData);
}

async function deleteSalesRecord(salesRecordId) {
    const salesRecordDocRef = doc(db, 'sales_records', salesRecordId);
    await deleteDoc(salesRecordDocRef);
}

export {
    getSalesRecords,
    getSalesRecordById,
    createSalesRecord,
    updateSalesRecord,
    deleteSalesRecord
};