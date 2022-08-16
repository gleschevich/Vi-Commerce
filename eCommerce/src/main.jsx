import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH9fLUHbsBIztrnurghImLc_KL25SAZy0",
  authDomain: "vi-commerce.firebaseapp.com",
  projectId: "vi-commerce",
  storageBucket: "vi-commerce.appspot.com",
  messagingSenderId: "863671088205",
  appId: "1:863671088205:web:43c1b46b3fcc215f015804",
  measurementId: "G-TJMEXXDZ1H"
};

initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
