import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlyzUq8AbyQg-yO65s8cceLbojlxYtEfE",
  authDomain: "pei-v1.firebaseapp.com",
  projectId: "pei-v1",
  storageBucket: "pei-v1.appspot.com",
  messagingSenderId: "969332427406",
  appId: "1:969332427406:web:dbec202de73cf7845c17df",
  measurementId: "G-BC2BLYT84V",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, projectStorage };
