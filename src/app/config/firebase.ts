// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eventmanagement-100.firebaseapp.com",
  projectId: "eventmanagement-100",
  storageBucket: "eventmanagement-100.appspot.com",
  messagingSenderId: "271330562162",
  appId: "1:271330562162:web:3fe1cb6788674e8540b2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);