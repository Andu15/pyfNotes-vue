// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4OzKsL-6kGCjK3bUlSNFjK-tZs0WcrPw",
  authDomain: "pyfnotes.firebaseapp.com",
  projectId: "pyfnotes",
  storageBucket: "pyfnotes.appspot.com",
  messagingSenderId: "1018457962274",
  appId: "1:1018457962274:web:5e859deb53179e5799577b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

