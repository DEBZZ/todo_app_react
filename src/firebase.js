// const firebaseConfig = {
    // apiKey: "AIzaSyB8JIkhXs5f5r2ClNPxNaY85dCLbHAkk2U",
    // authDomain: "todo-app-cp-bfacd.firebaseapp.com",
    // projectId: "todo-app-cp-bfacd",
    // storageBucket: "todo-app-cp-bfacd.appspot.com",
    // messagingSenderId: "983085984414",
    // appId: "1:983085984414:web:d23a870a4e4cb3fdf9698f",
    // measurementId: "G-5HC22CCTNZ"
//   };

import firebase from 'firebase';
const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyB8JIkhXs5f5r2ClNPxNaY85dCLbHAkk2U",
    authDomain: "todo-app-cp-bfacd.firebaseapp.com",
    projectId: "todo-app-cp-bfacd",
    storageBucket: "todo-app-cp-bfacd.appspot.com",
    messagingSenderId: "983085984414",
    appId: "1:983085984414:web:d23a870a4e4cb3fdf9698f",
    measurementId: "G-5HC22CCTNZ"
});

const db = firebaseapp.firestore();

export { db };