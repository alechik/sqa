import { db, auth } from "../firebase--config.js";
import { User } from "../../domain/User.js";
import { doc, setDoc, getDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateEmail, updatePassword, deleteUser as deleteFirebaseUser, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
// Constantes para los IDs de tipos de usuario
const ADMIN_ID = "1";
const WORKER_ID = "2";
const CLIENT_ID = "3";

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
        console.log(result);
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

export const createUser = async (userData) => {
    const { email, password, ...profileData } = userData; // Excluye la contraseña de los datos del perfil
    try {
        // Crea un usuario con correo electrónico y contraseña en Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Crea/actualiza el perfil del usuario en Firestore sin incluir la contraseña
        await setDoc(doc(db, "users", user.uid), {
            ...profileData,
            userTypeId: CLIENT_ID, // Establece el tipo de usuario como 'cliente' por defecto
        });

        console.log("Usuario creado con éxito:", user.uid);
        return user.uid; // Retorna el UID del usuario para cualquier procesamiento posterior necesario
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw error; // Esto permite que el llamador maneje el error, por ejemplo, mostrando un mensaje al usuario
    }
};



async function getUsers() {
    const usersCollectionRef = collection(db, "users");
    const querySnapshot = await getDocs(usersCollectionRef);
    const users = [];
    querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        const user = new User(
            docSnap.id, // Se asume que este es el UID proporcionado por Firebase Authentication
            data.email,
            data.avatar,
            data.names,
            data.gender,
            data.birthday_date,
            data.address,
            data.ci,
            data.userTypeId

        );
        users.push(user);
    });
    return users;
}

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
    const { ...updatedDataForFirestore } = updatedData;

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