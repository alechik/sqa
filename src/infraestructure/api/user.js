import { db, auth } from "../firebase--config.js";
import { User } from "../../domain/User.js";
import { doc, setDoc, getDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateEmail, updatePassword, deleteUser as deleteFirebaseUser } from 'firebase/auth';

async function getUsers() {
    const usersCollectionRef = collection(db, "users");
    const querySnapshot = await getDocs(usersCollectionRef);
    const users = [];
    querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        const user = new User(
            docSnap.id, // Se asume que este es el UID proporcionado por Firebase Authentication
            data.address,
            data.birthday_date,
            data.ci,
            data.email,
            data.gender,
            data.lastnames,
            data.names,
            "", // La contraseña no se almacena en Firestore por razones de seguridad
            data.user_type_id
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

async function createUser(userData) {
    const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    const user = userCredential.user;
    const userToSave = new User(user.uid, userData.address, userData.birthday_date, userData.ci, userData.email, userData.gender, userData.lastnames, userData.names, userData.user_type_id); // Asumiendo que userData incluye estos campos
    await setDoc(doc(db, "users", user.uid), {
        // Usamos los valores del objeto userToSave, excluyendo la propiedad de contraseña
        address: userToSave.address,
        birthday_date: userToSave.birthday_date,
        ci: userToSave.ci,
        email: userToSave.email,
        gender: userToSave.gender,
        lastnames: userToSave.lastnames,
        names: userToSave.names,
        user_type_id: userToSave.user_type_id
    });
    return user.uid;
}

/*
// Crear un nuevo usuario en Firebase Authentication y almacenar sus datos en Firestore
async function createUser(userData) {
    // Crear usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    const user = userCredential.user;

    // Prepara los datos del usuario para Firestore (excluye la contraseña)
    const { ...userDataForFirestore } = userData;

    // Almacenar los datos adicionales del usuario en Firestore, incluyendo el email
    await setDoc(doc(db, "users", user.uid), userDataForFirestore);

    return user.uid;
}
*/

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
    deleteUser
};