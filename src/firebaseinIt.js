// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA5xHxdAqZBTG-FBZQRM9nYmyKm1_cK4A",
  authDomain: "photo-folio-new.firebaseapp.com",
  projectId: "photo-folio-new",
  storageBucket: "photo-folio-new.appspot.com",
  messagingSenderId: "12624976632",
  appId: "1:12624976632:web:5b1157ea7dac7ecacd390d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
