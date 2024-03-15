import { getFirestore } from "firebase/firestore";
import {app} from "./firebase--config.js"

// Obtiene una instancia de Firestore
export const db = getFirestore(app);


