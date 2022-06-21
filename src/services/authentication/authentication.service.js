// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Optionally import the services that you want to use
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJ_slPkf_uIqC6hf5_UF9hWaXGehBdc-4",
  authDomain: "mealstogo-99423.firebaseapp.com",
  projectId: "mealstogo-99423",
  storageBucket: "mealstogo-99423.appspot.com",
  messagingSenderId: "585315617171",
  appId: "1:585315617171:web:90ed2c4a8539b2f801c066",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
