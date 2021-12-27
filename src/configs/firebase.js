import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAg_n-NZEG8qYTl6i50zRbp7DBqlpISGiw",
  authDomain: "imonney-24ccf.firebaseapp.com",
  projectId: "imonney-24ccf",
  storageBucket: "imonney-24ccf.appspot.com",
  messagingSenderId: "443840538767",
  appId: "1:443840538767:web:1e0be5a7ce9fbf50d7e8fa",
  measurementId: "G-MQC751E2HV",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, projectStorage };
