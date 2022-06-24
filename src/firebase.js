// Initialize Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAhD-QfkLQkh2OII_Jo19psXtDPwHiGR2U",
    authDomain: "profb-cl.firebaseapp.com",
    projectId: "profb-cl",
    storageBucket: "profb-cl.appspot.com",
    messagingSenderId: "178759105351",
    appId: "1:178759105351:web:c3d6ad6e22c02925a4aa62",
    measurementId: "G-2ZT91W45VY"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();    // for database
const auth = firebase.auth();    //for authentication
const storage = firebase.storage(); //for storage in the databse.
const provider = new firebase.auth.GoogleAuthProvider();// for login google authentication

export { auth, storage, provider };
export default db;