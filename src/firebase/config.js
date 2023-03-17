// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCO3GdwPJ7NRD2i4jQMgoKXG4Rh5hNDmaY",
  authDomain: "gallery-react-1142a.firebaseapp.com",
  projectId: "gallery-react-1142a",
  storageBucket: "gallery-react-1142a.appspot.com",
  messagingSenderId: "145562244459",
  appId: "1:145562244459:web:0f44ea11870f10ea94e82e",
  measurementId: "G-ZJV9SHPKTB"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const appStorage = firebase.storage();
export const timestamp=firebase.firestore.FieldValue.serverTimestamp;


// const appStorage=firebase.storage();
// const appStore=firebase.firestore();
