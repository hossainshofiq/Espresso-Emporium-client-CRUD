// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-zv_hfujUA2x8CFKn0Nj6DN_OlA6F4YM",
  authDomain: "espresso-emporium-b035c.firebaseapp.com",
  projectId: "espresso-emporium-b035c",
  storageBucket: "espresso-emporium-b035c.firebasestorage.app",
  messagingSenderId: "430569223781",
  appId: "1:430569223781:web:932f71088cfdbf1c29388c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);