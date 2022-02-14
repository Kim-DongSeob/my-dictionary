// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM2SEsXFaVPmBWv4ZubW38q-qPvWmCsM0",
  authDomain: "my-dictionary-a7e0b.firebaseapp.com",
  projectId: "my-dictionary-a7e0b",
  storageBucket: "my-dictionary-a7e0b.appspot.com",
  messagingSenderId: "84806014529",
  appId: "1:84806014529:web:71f726ddebac91507d18c0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export {db};