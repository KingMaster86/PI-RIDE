// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6OjlR2U8eiFYSFt1z6EuLtUBeaanYzQc",
  authDomain: "pi-ride-85a00.firebaseapp.com",
  databaseURL: "https://pi-ride-85a00-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pi-ride-85a00",
  storageBucket: "pi-ride-85a00.firebasestorage.app",
  messagingSenderId: "217958353069",
  appId: "1:217958353069:web:f9b246df01656a8ee29e24",
  measurementId: "G-6LHY6KEGN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
