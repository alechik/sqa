// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF8jKuen4pA9YJvZWBTLlIPOYpzgJ9i6E",
  authDomain: "tienda-fa7e8.firebaseapp.com",
  databaseURL: "https://tienda-fa7e8-default-rtdb.firebaseio.com",
  projectId: "tienda-fa7e8",
  storageBucket: "tienda-fa7e8.appspot.com",
  messagingSenderId: "117697052879",
  appId: "1:117697052879:web:e70dbf632fc084fce9f7ba",
  measurementId: "G-722C6BWG3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
//const analytics = getAnalytics(app);