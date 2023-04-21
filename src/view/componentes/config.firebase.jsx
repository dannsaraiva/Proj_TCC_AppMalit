// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-OFM7thUtXfu1PtreU96cmV04hpXxZGU",
    authDomain: "malit-3b137.firebaseapp.com",
    databaseURL: "https://malit-3b137-default-rtdb.firebaseio.com",
    projectId: "malit-3b137",
    storageBucket: "malit-3b137.appspot.com",
    messagingSenderId: "120786147536",
    appId: "1:120786147536:web:3fbbe1610463a1388a66d5",
    measurementId: "G-SZ7ECM98QS"
};

//Inicialização do firebase.
const appFirebase = initializeApp(firebaseConfig);

//Inicialização do banco.
export const bd = getDatabase(appFirebase);