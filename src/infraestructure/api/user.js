import { db, auth } from "../firebase--config.js";
import { User } from "../../domain/User.js";
import { doc, setDoc, getDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateEmail, updatePassword, deleteUser as deleteFirebaseUser, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
// Constantes para los IDs de tipos de usuario
export const ADMIN_ID = "1";
export const WORKER_ID = "2";
export const CLIENT_ID = "3";

const handleAuthError = (error) => {
    console.error("Error de inicio de sesión:", error.code);
    let errorMessage = '';
    switch (error.code) {
        case 'auth/account-exists-with-different-credential':
            errorMessage = 'Ya existe una cuenta con un método de inicio de sesión diferente.';
            break;
        case 'auth/email-already-in-use':
            errorMessage = 'El correo electrónico ya está en uso con otra cuenta.';
            break;
        case 'auth/wrong-password':
            errorMessage = 'La contraseña es incorrecta. Por favor, inténtalo de nuevo.';
            break;
        case 'auth/user-not-found':
            errorMessage = 'No se encontró una cuenta con este correo electrónico.';
            break;
        case 'auth/user-disabled':
            errorMessage = 'La cuenta ha sido deshabilitada. Contacta al soporte para más información.';
            break;
        case 'auth/too-many-requests':
            errorMessage = 'Hemos detectado demasiadas solicitudes desde tu dispositivo. Por favor, espera un momento e inténtalo de nuevo.';
            break;
        default:
            errorMessage = `Error al iniciar sesión. ${error.message}`;
            break;
    }
    return errorMessage;
};


async function signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        // Obtiene el perfil de usuario de Facebook
        // Accediendo a los datos directamente desde user, no desde profile
        const email = user.email || "";
        const displayName = user.displayName || "";
        const photoURL = user.photoURL || "";


        // Verifica si el usuario ya existe en Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
            // Si el usuario no existe, crea el registro en Firestore
            await setDoc(userDocRef, {
                avatar: photoURL,
                email,
                names: displayName, // Asumiendo que queremos el nombre completo
                gender: "",
                numero: "",
                birthday_date: "",
                address: "", // Dejar en blanco
                ci: "", // Dejar en blanco
                userTypeId: CLIENT_ID, // Cliente por defecto
            });
        }

        return user;
    } catch (error) {
        throw new Error(handleAuthError(error));
    }
}

async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
       
        const user = result.user;

        // Verifica si el usuario ya existe en Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
            // Si el usuario no existe, crea el registro en Firestore
            await setDoc(userDocRef, {
                avatar: user.photoURL || "",
                email: user.email || "",
                names: user.displayName || "",
                gender: "", // Dejar en blanco
                numero: "",
                birthday_date: "", // Dejar en blanco
                address: "", // Dejar en blanco
                ci: "", // Dejar en blanco
                userTypeId: CLIENT_ID, // Cliente por defecto
            });
        }

        return user;
    } catch (error) {
        throw new Error(handleAuthError(error));
    }
}

export async function createUser(userData) {
    const newUser = new User(
        null, // Firebase genera automáticamente el ID
        userData.address,
        userData.birthday_date,
        userData.ci,
        userData.email,
        userData.numero,
        userData.gender,
        userData.lastnames,
        userData.names,
        userData.user_type_id,
        userData.picture
    );

    const userRef = doc(collection(db, "users"));
    await setDoc(userRef, newUser.toFirestore());
    return userRef.id; // Retorna el ID del nuevo usuario
}

export async function getUsers() {
    const usersCollectionRef = collection(db, "users");
    const querySnapshot = await getDocs(usersCollectionRef);
    const users = [];
    querySnapshot.forEach(docSnap => {
        const data = docSnap.data();
        const user = new User(
            docSnap.id,
            data.address,
            data.birthday_date,
            data.ci,
            data.email,
            data.numero,
            data.gender,
            data.lastnames,
            data.names,
            data.user_type_id,
            data.picture
        );
        users.push(user);
    });
    return users;
}

export const getUserProfile = async () => {
    const user = auth.currentUser; // Obtiene el usuario actual de Firebase Authentication
    if (!user) {
        // Si no hay un usuario actual, devuelve null o maneja como consideres necesario
        return null;
    }

    const userDocRef = doc(db, "users", user.uid); // Referencia al documento del usuario en Firestore
    const userDocSnap = await getDoc(userDocRef); // Obtiene el documento del usuario

    if (!userDocSnap.exists()) {
        // Si el documento del usuario no existe, podría significar que el usuario no está completamente registrado
        console.error("No se encontró el perfil del usuario en Firestore.");
        return null; // O maneja como consideres necesario
    }

    return userDocSnap.data(); // Devuelve todos los datos del perfil del usuario
};

export async function getUserById(userId) {
    const userDocRef = doc(db, "users", userId);
    const docSnap = await getDoc(userDocRef);

    if (!docSnap.exists()) {
        throw new Error("No se encontró el usuario");
    }

    return { uid: userId, ...docSnap.data() };
}

// Actualizar los datos de un usuario en Firestore y Firebase Authentication si es necesario
export async function updateUser(userId, updatedData) {
    const userRef = doc(db, "users", userId);
    const newUser = new User(
        userId,
        updatedData.address,
        updatedData.birthday_date,
        updatedData.ci,
        updatedData.email,
        updatedData.numero,
        updatedData.gender,
        updatedData.lastnames,
        updatedData.names,
        updatedData.user_type_id,
        updatedData.picture
    );
    await updateDoc(userRef, newUser.toFirestore());
}


// Eliminar un usuario de Firebase Authentication y Firestore
export async function deleteUser(userId) {
    const userRef = doc(db, "users", userId);
    await deleteDoc(userRef);
}


export const getUserTypes = async () => {
    try {
        const userTypesRef = collection(db, "user_types");
        const querySnapshot = await getDocs(userTypesRef);
        const userTypes = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        console.log("User types fetched:", userTypes); // Muestra los datos obtenidos
        return userTypes;
    } catch (error) {
        console.error("Error fetching user types:", error);
        throw new Error("Failed to fetch user types: " + error.message);
    }
};


export default{
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    signInWithGoogle,
    signInWithFacebook,
    ADMIN_ID,
    WORKER_ID,
    CLIENT_ID
};