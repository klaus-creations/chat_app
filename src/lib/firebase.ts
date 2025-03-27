// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "chat-app-8c7bc.firebaseapp.com",
  projectId: "chat-app-8c7bc",
  storageBucket: "chat-app-8c7bc.firebasestorage.app",
  messagingSenderId: "527357601214",
  appId: "1:527357601214:web:d3a977419ff442d5c705ef",
  measurementId: "G-1T36R1V1K6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();


