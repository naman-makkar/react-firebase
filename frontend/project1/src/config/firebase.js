// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUVQvv6evzSk6WwOeGjedAROrXxEpbGAY",
  authDomain: "vite-contact-c72ee.firebaseapp.com",
  projectId: "vite-contact-c72ee",
  storageBucket: "vite-contact-c72ee.appspot.com",
  messagingSenderId: "420114773501",
  appId: "1:420114773501:web:d170742ea15d836c289594"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);