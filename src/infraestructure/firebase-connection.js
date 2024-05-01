import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions"; 

import { app } from "./firebase--config.js";

// Inicializa Firestore usando la configuración de Firebase
export const db = getFirestore(app);

// Inicializa Firebase Auth
export const auth = getAuth(app);

// Inicializa Firebase Storage
export const storage = getStorage(app);

// Inicializa Firebase Functions
export const functions = getFunctions(app);
