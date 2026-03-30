// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// js/config.js

// Exportamos a configuração exata para que as páginas HTML consigam ler
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDWhGtdl9A9CeWFLX1ZKN3ORju0K_6Up9g",
  authDomain: "myli-30303.firebaseapp.com",
  projectId: "myli-30303",
  storageBucket: "myli-30303.firebasestorage.app",
  messagingSenderId: "861514681124",
  appId: "1:861514681124:web:b33c9a52a08260c48f41b1",
  measurementId: "G-XSFF822HWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
