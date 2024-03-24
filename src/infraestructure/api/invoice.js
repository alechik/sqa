import { db } from '../firebase-connection.js';
import { Invoice } from '../../domain/Invoice.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function getInvoices() {
    const invoicesCollectionRef = collection(db, 'invoices');
    const invoicesSnapshot = await getDocs(invoicesCollectionRef);
    const invoices = [];
    invoicesSnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        const invoice = new Invoice(
            docSnap.id,
            data.delivery_id,
            data.user_id,
            data.description,
            data.date
        );
        invoices.push(invoice);
    });
    return invoices;
}

export async function getInvoiceById(invoiceId) {
    const invoiceDocRef = doc(db, 'invoices', invoiceId);
    const invoiceDoc = await getDoc(invoiceDocRef);
    if (!invoiceDoc.exists()) {
        throw new Error('Invoice not found');
    }
    const data = invoiceDoc.data();
    return new Invoice(
        invoiceDoc.id,
        data.delivery_id,
        data.user_id,
        data.description,
        data.date
    );
}

export async function createInvoice(invoiceData) {
    const newInvoice = new Invoice(
        null,
        invoiceData.delivery_id,
        invoiceData.user_id,
        invoiceData.description,
        invoiceData.date
    );

    const invoiceDataForFirestore = newInvoice.toFirestore();
    const docRef = await addDoc(collection(db, 'invoices'), invoiceDataForFirestore);
    return docRef.id; 
}

export async function updateInvoice(invoiceId, updatedData) {
    const invoiceDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value;
        return acc;
    }, {});

    await updateDoc(doc(db, 'invoices', invoiceId), invoiceDataForFirestore);
}

export async function deleteInvoice(invoiceId) {
    const invoiceDocRef = doc(db, 'invoices', invoiceId);
    await deleteDoc(invoiceDocRef);
}

export default {
    getInvoices,
    getInvoiceById,
    createInvoice,
    updateInvoice,
    deleteInvoice
};
