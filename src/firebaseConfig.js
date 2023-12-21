// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfjfxeNx3b8F9mEHySfJft4euAoUPr9Dg",
  authDomain: "meal-7fd68.firebaseapp.com",
  projectId: "meal-7fd68",
  storageBucket: "meal-7fd68.appspot.com",
  messagingSenderId: "132836647876",
  appId: "1:132836647876:web:8005ee49ff00c93e0cba91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);