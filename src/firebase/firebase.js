// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHF4R91Bd5g-hDmHmhGHHyj6zsLtr_WBc",
    authDomain: "cs1300.firebaseapp.com",
    projectId: "cs1300",
    storageBucket: "cs1300.appspot.com",
    messagingSenderId: "181541175490",
    appId: "1:181541175490:web:9b86ed3b7bdb2ba6ad7b5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { firebaseConfig }