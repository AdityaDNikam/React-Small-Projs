// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrBZhVK_Nmh7Dqp0f3Pt2Gg4yCg2ejqN0",
    authDomain: "vite-contact-manager-9c0d1.firebaseapp.com",
    projectId: "vite-contact-manager-9c0d1",
    storageBucket: "vite-contact-manager-9c0d1.firebasestorage.app",
    messagingSenderId: "322224779497",
    appId: "1:322224779497:web:dfa630406934a2b50dc078"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);