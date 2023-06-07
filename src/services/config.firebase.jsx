import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

//Inicialização do firebase.
const appFirebase = initializeApp(
  {
    apiKey: "AIzaSyAUL6y5fn1N_Y7pjDRAQzryijFWUGGcJQw",
    authDomain: "malitapp.firebaseapp.com",
    databaseURL: "https://malitapp-default-rtdb.firebaseio.com",
    projectId: "malitapp",
    storageBucket: "malitapp.appspot.com",
    messagingSenderId: "621662774462",
    appId: "1:621662774462:web:9813d421bfe6596d162aef",
    measurementId: "G-0R8FY1H8XD"
  }
);

//Inicialização do banco.
export const bd = getDatabase(appFirebase);