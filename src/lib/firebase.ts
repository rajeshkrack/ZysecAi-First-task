// firebase.ts (Corrected Version)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUKy1tLzfcoMxww-TcijQvIFKpvi_tZWY",
  authDomain: "newswebsite-c85eb.firebaseapp.com",
  projectId: "newswebsite-c85eb",
  storageBucket: "newswebsite-c85eb.appspot.com",
  messagingSenderId: "899553031553",
  appId: "1:899553031553:web:d4f5cb275f4abd23336480",
  measurementId: "G-5FJBG53S2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ✅ Correct Firestore initialization

export { db };
