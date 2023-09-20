// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqgQEVY-FRwIjuXK80nK00ZFkBewqFTP0",
  authDomain: "imagegalleryapp-9ebdd.firebaseapp.com",
  projectId: "imagegalleryapp-9ebdd",
  storageBucket: "imagegalleryapp-9ebdd.appspot.com",
  messagingSenderId: "936653419123",
  appId: "1:936653419123:web:c392b6eb2483ffe4c5f006",
  measurementId: "G-V2LPYX4N01"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);