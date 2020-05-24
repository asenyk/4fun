// import * as firebase from "firebase/app";

// // Add the Firebase services that you want to use
// // import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAO5OHtDDsqxqQlrQmce07n_tpksan1F6s",
//   authDomain: "sandbox4fun.firebaseapp.com",
//   databaseURL: "https://sandbox4fun.firebaseio.com",
//   projectId: "sandbox4fun",
//   storageBucket: "sandbox4fun.appspot.com",
//   messagingSenderId: "756577445793",
//   appId: "1:756577445793:web:5f6384f9b5694622a80de0",
//   measurementId: "G-LHSHQ94H9F"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAO5OHtDDsqxqQlrQmce07n_tpksan1F6s',
  authDomain: 'sandbox4fun.firebaseapp.com',
  databaseURL: 'https://sandbox4fun.firebaseio.com',
  projectId: 'sandbox4fun',
  storageBucket: 'sandbox4fun.appspot.com',
  messagingSenderId: '756577445793',
  appId: '1:756577445793:web:5f6384f9b5694622a80de0',
  measurementId: 'G-LHSHQ94H9F'
})

export const db = firebaseApp.firestore()
