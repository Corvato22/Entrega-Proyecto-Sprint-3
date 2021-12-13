// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeUtfcFg5to2XKq-7srH-3uh62FKH85AQ",
    authDomain: "sprint-3-academia-geek.firebaseapp.com",
    projectId: "sprint-3-academia-geek",
    storageBucket: "sprint-3-academia-geek.appspot.com",
    messagingSenderId: "1068476750439",
    appId: "1:1068476750439:web:d7339cd00a270e4b6912c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const db = getFirestore();

export {
    app,
    db,
}