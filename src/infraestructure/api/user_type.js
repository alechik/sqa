import { db } from './firebase-connection.js';
import { UserType } from "../domain/UserType.js";
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

async function getUserTypes() {
    const userTypesCollectionRef = collection(db, 'user_types');
    const querySnapshot = await getDocs(userTypesCollectionRef);
    return querySnapshot.docs.map(docSnap => {
        return new UserType(
            docSnap.id,
            docSnap.data().description, 
            docSnap.data().name
        );
    });
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
    return docRef.id;
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
