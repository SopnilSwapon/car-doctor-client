// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYo0BsedKkJ9pnM1pGIrPMrsjq7Y0FvCg",
  authDomain: "car-doctor-a863b.firebaseapp.com",
  projectId: "car-doctor-a863b",
  storageBucket: "car-doctor-a863b.appspot.com",
  messagingSenderId: "507644427597",
  appId: "1:507644427597:web:21aeec7414caf169e00b04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;