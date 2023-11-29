// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBk_dgrmIPgUMwX8h1O6qZOnWyYaFxXZvE",
  authDomain: "netflix-clone-63b.firebaseapp.com",
  projectId: "netflix-clone-63b",
  storageBucket: "netflix-clone-63b.appspot.com",
  messagingSenderId: "299038768598",
  appId: "1:299038768598:web:f6eb731e0e658bde523877",
  measurementId: "G-LPMTC5LTGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);