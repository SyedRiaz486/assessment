// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWOdZ_zVU-tFoiBlzwOh8z_7Nns8Vx0Dw",
    authDomain: "assessment-1e4d0.firebaseapp.com",
    databaseURL: "https://assessment-1e4d0-default-rtdb.firebaseio.com",
    projectId: "assessment-1e4d0",
    storageBucket: "assessment-1e4d0.appspot.com",
    messagingSenderId: "351697678397",
    appId: "1:351697678397:web:e470e2a17fe9327c09ba54",
    measurementId: "G-90QTQ348GB"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);