import database from '@react-native-firebase/database'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';

//Inicialização do firebase.
const appFirebase = initializeApp(
  {
    apiKey: "AIzaSyB-OFM7thUtXfu1PtreU96cmV04hpXxZGU",
    authDomain: "malit-3b137.firebaseapp.com",
    databaseURL: "https://malit-3b137-default-rtdb.firebaseio.com",
    projectId: "malit-3b137",
    storageBucket: "malit-3b137.appspot.com",
    messagingSenderId: "120786147536",
    appId: "1:120786147536:web:3fbbe1610463a1388a66d5",
    measurementId: "G-SZ7ECM98QS"
  }
);


//Inicialização do banco.
export const bd = getDatabase(appFirebase);