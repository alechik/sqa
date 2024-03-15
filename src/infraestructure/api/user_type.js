// user_type.js
import { db } from './firebase-connection.js'; // Asegúrate de que esta es la ruta correcta al archivo
import { UserType } from "../domain/UserType.js"; // Verifica que esta es la ruta correcta al archivo
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

async function getUserTypes() {
    const userTypesCollectionRef = collection(db, 'user_types');
    const querySnapshot = await getDocs(userTypesCollectionRef);
    return querySnapshot.docs.map(docSnap => new UserType(docSnap.id, docSnap.data().description, docSnap.data().name));
}

async function getUserTypeById(userTypeId) {
    const userTypeDocRef = doc(db, 'user_types', userTypeId);
    const docSnap = await getDoc(userTypeDocRef);
    if (!docSnap.exists()) throw new Error('User type not found');
    return new UserType(docSnap.id, docSnap.data().description, docSnap.data().name);
}

async function createUserType(userTypeData) {
    const userTypesCollectionRef = collection(db, 'user_types');
    const docRef = await addDoc(userTypesCollectionRef, userTypeData);
    return docRef.id; // Devuelve el ID del nuevo documento
}

async function updateUserType(userTypeId, updatedData) {
    const userTypeDocRef = doc(db, 'user_types', userTypeId);
    await updateDoc(userTypeDocRef, updatedData);
}

async function deleteUserType(userTypeId) {
    const userTypeDocRef = doc(db, 'user_types', userTypeId);
    await deleteDoc(userTypeDocRef);
}

export {
    getUserTypes,
    getUserTypeById,
    createUserType,
    updateUserType,
    deleteUserType
};
