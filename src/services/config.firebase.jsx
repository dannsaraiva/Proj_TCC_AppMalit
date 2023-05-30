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

//Segundo firebase.
// const appFirebase = initializeApp(
//   {
//     apiKey: "AIzaSyAcmGqKQoaGGpCyQ75yrKyfRpjFMXrUnpg",
//     authDomain: "projetoaulaextra-64b8d.firebaseapp.com",
//     databaseURL: "https://projetoaulaextra-64b8d-default-rtdb.firebaseio.com",
//     projectId: "projetoaulaextra-64b8d",
//     storageBucket: "projetoaulaextra-64b8d.appspot.com",
//     messagingSenderId: "726175196188",
//     appId: "1:726175196188:web:675c5d7ff09ce472736bd9",
//     measurementId: "G-5518DPCWQ1"
//   }
// );

//Terceiro Firebase.
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyAXfSp7w_gU1UWk2M6Ce59JGwwVv84z394",
//   authDomain: "malit-maleta.firebaseapp.com",
//   projectId: "malit-maleta",
//   storageBucket: "malit-maleta.appspot.com",
//   messagingSenderId: "1049385833079",
//   appId: "1:1049385833079:web:6cd423ed0010a74bbbec72"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

//Inicialização do banco.
export const bd = getDatabase(appFirebase);