// Importaciones necesarias de Firebase
import { db, auth } from "../firebase--config.js";
import { createUserWithEmailAndPassword, updateEmail, updatePassword, deleteUser as deleteFirebaseUser } from 'firebase/auth';
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";

// Crear un nuevo usuario en Firebase Authentication y almacenar sus datos en Firestore
async function createUser(userData) {
    // Crear usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    const user = userCredential.user;
    
    // Prepara los datos del usuario para Firestore (excluye la contraseña)
    const {  ...userDataForFirestore } = userData;

    // Almacenar los datos adicionales del usuario en Firestore, incluyendo el email
    await setDoc(doc(db, "users", user.uid), userDataForFirestore);

    return user.uid;
}

// Obtener los datos de un usuario desde Firestore
async function getUserById(userId) {
    const userDocRef = doc(db, "users", userId);
    const docSnap = await getDoc(userDocRef);

    if (!docSnap.exists()) {
        throw new Error("No se encontró el usuario");
    }

    return { uid: userId, ...docSnap.data() };
}

// Actualizar los datos de un usuario en Firestore y Firebase Authentication si es necesario
async function updateUser(userId, updatedData) {
    // Actualizar email en Firebase Authentication si se proporciona
    if (updatedData.email) {
        const user = await auth.currentUser;
        await updateEmail(user, updatedData.email);
    }
    // Actualizar contraseña en Firebase Authentication si se proporciona
    if (updatedData.password) {
        const user = await auth.currentUser;
        await updatePassword(user, updatedData.password);
    }

    // Excluye contraseña de los datos actualizados para Firestore
    const {  ...updatedDataForFirestore } = updatedData;

    // Actualizar los datos del usuario en Firestore, incluyendo el email
    await setDoc(doc(db, "users", userId), updatedDataForFirestore, { merge: true });
}

// Eliminar un usuario de Firebase Authentication y Firestore
async function deleteUser(userId) {
    // Eliminar el usuario de Firebase Authentication
    const user = await auth.currentUser;
    if (user.uid === userId) {
        await deleteFirebaseUser(user);
    }

    // Eliminar los datos del usuario de Firestore
    await deleteDoc(doc(db, "users", userId));
}

export {
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
