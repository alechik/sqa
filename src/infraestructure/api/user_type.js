import { db } from './firebase-connection.js';
import { UserType } from "../domain/UserType.js";
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function getUserTypes() {
    const userTypesCollectionRef = collection(db, 'user_types');
    const userTypesSnapshot = await getDocs(userTypesCollectionRef);
    const userTypes = [];
    userTypesSnapshot.forEach((doc) => {
        const data = doc.data();
        const userType = new UserType(
            doc.id,
            data.description,
            data.name
        );
        userTypes.push(userType);
    });
    return userTypes;
}

export async function getUserTypeById(userTypeId) {
    const userTypeDocRef = doc(db, 'user_types', userTypeId);
    const docSnap = await getDoc(userTypeDocRef);
    if (!docSnap.exists()) {
        throw new Error('User type not found');
    }
    const userTypeData = docSnap.data();
    return new UserType(
        docSnap.id,
        userTypeData.description,
        userTypeData.name
    );
}

export async function createUserType(userTypeData) {
    const newUserType = new UserType(
        null,
        userTypeData.description,
        userTypeData.name
    );

    const userTypeDataForFirestore = newUserType.toFirestore();

    const docRef = await addDoc(collection(db, 'user_types'), userTypeDataForFirestore);
    newUserType.id = docRef.id;
    return docRef.id;
}

export async function updateUserType(userTypeId, updatedData) {
    const userTypeDataForFirestore = Object.entries(updatedData).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value;
        return acc;
    }, {});

    await updateDoc(doc(db, 'user_types', userTypeId), userTypeDataForFirestore);
}

async function deleteUserType(userTypeId) {
    const userTypeDocRef = doc(db, 'user_types', userTypeId);
    await deleteDoc(userTypeDocRef);
}

export default {
    getUserTypes,
    getUserTypeById,
    createUserType,
    updateUserType,
    deleteUserType
};