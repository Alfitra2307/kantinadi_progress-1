// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8EiX6eYKHjBpKpapg_JupXbX9Z4IR6M4",
  authDomain: "kantin-611ef.firebaseapp.com",
  projectId: "kantin-611ef",
  storageBucket: "kantin-611ef.firebasestorage.app",
  messagingSenderId: "607291160443",
  appId: "1:607291160443:web:f498999672dd4d68a0efde",
  measurementId: "G-G9LVF5C03T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Firestore instance
export const auth = getAuth(app);    // Authentication instance
