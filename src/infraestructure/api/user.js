import { db, auth } from "../firebase--config.js";
import { User } from "../../domain/User.js";
import {
    doc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc, query, where
} from "firebase/firestore";
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    updateEmail,
    updatePassword,
    deleteUser,
    signInWithRedirect,
} from 'firebase/auth';

// Constantes para los IDs de tipos de usuario
export const ADMIN_ID = "1";
export const WORKER_ID = "2";
export const CLIENT_ID = "3";

const handleAuthError = (error) => {
    const errorMessage = {
        'auth/account-exists-with-different-credential': 'Ya existe una cuenta con un método de inicio de sesión diferente.',
        'auth/email-already-in-use': 'El correo electrónico ya está en uso con otra cuenta.',
        'auth/wrong-password': 'La contraseña es incorrecta. Por favor, inténtalo de nuevo.',
        'auth/user-not-found': 'No se encontró una cuenta con este correo electrónico.',
        'auth/user-disabled': 'La cuenta ha sido deshabilitada. Contacta al soporte para más información.',
        'auth/too-many-requests': 'Hemos detectado demasiadas solicitudes desde tu dispositivo. Por favor, espera un momento e inténtalo de nuevo.'
    }[error.code] || `Error al iniciar sesión. ${error.message}`;
    console.error("Error de inicio de sesión:", error.code);
    return errorMessage;
};

async function signInWithProvider(provider) {
    try {
        const result = await signInWithRedirect(auth, provider);
        const user = result.user;
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
            await setDoc(userDocRef, {
                email: user.email,
                names: user.displayName || "",
                avatar: user.photoURL || "",
                gender: "",
                numero: "",
                birthday_date: "",
                address: "",
                ci: "",
                userTypeId: CLIENT_ID
            });
            console.log("User profile created.");
        }
        return user;
    } catch (error) {
        throw new Error(handleAuthError(error));
    }
}

export const signInWithGoogle = () => signInWithProvider(new GoogleAuthProvider());
export const signInWithFacebook = () => signInWithProvider(new FacebookAuthProvider());

export async function createUser(userData) {
    if (!userData.uid) {
        console.error("No UID provided for createUser");
        throw new Error("No UID provided");
    }

    const userRef = doc(db, "users", userData.uid); 
    await setDoc(userRef, {
        ...userData,
        userTypeId: userData.userTypeId || CLIENT_ID,
    });
    console.log("New user created with ID:", userRef.id);
    return userRef.id; 
}


// Asumiendo que las constantes ADMIN_ID y WORKER_ID están correctamente definidas
export async function getUsers() {
    try {
        const usersCollectionRef = collection(db, "users");
        const q = query(usersCollectionRef, where("userTypeId", "in", [ADMIN_ID, WORKER_ID]));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log("No se encontraron usuarios.");
            return [];
        }
        return querySnapshot.docs.map(doc => {
            const userData = doc.data();
            return {
                id: doc.id,
                names: userData.names,
                email: userData.email,
                ci: userData.ci,
                gender: userData.gender,
                userTypeId: userData.userTypeId,
                typeName: userData.userTypeId === ADMIN_ID ? "Administrador" : "Trabajador"
            };
        });
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw new Error("Error al obtener los usuarios desde Firestore");
    }
}

export const getUserProfile = async (uid) => {
    if (!uid) return null;
    const userDocRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userDocRef);
    return userDocSnap.exists() ? userDocSnap.data() : null;
};

export const getUserProfileByEmail = async (email) => {
    if (!email) return null;
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        console.log("No matching user found for email:", email);
        return null;
    }
    const userData = querySnapshot.docs[0].data();
    return userData;
};

export async function updateUser(userId, updatedData) {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, updatedData);
    console.log("User data updated for ID:", userId);
}

export async function removeUser(userId) {
    const userRef = doc(db, "users", userId);
    await deleteDoc(userRef);
    console.log("User deleted with ID:", userId);
}

export async function updateEmailAndPassword(userId, newEmail, newPassword) {
    const user = auth.currentUser;
    if (user && user.uid === userId) {
        await updateEmail(user, newEmail);
        await updatePassword(user, newPassword);
        console.log("Email and password updated.");
    } else {
        throw new Error('No autorizado para actualizar este usuario');
    }
}


// Funciones para manejar tipos de usuario
export async function getUserTypes() {
    try {
    const userTypesRef = collection(db, "user_types");
    const querySnapshot = await getDocs(userTypesRef);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error){
        console.error("Error al obtener los tipos de usuario:", error);
        throw new Error("Error al obtener los tipos de usuario desde Firestore");
    }
}

export async function getUserTypeById(id) {
    const userTypeRef = doc(db, "user_types", id);
    const docSnap = await getDoc(userTypeRef);
    return docSnap.exists() ? docSnap.data() : null;
}



export default {
    getUsers,
    createUser,
    getUserTypes,
    getUserTypeById,
    updateUser,
    deleteUser,
    removeUser,
    signInWithGoogle,
    signInWithFacebook,
    updateEmailAndPassword,
    ADMIN_ID,
    WORKER_ID,
    CLIENT_ID
};