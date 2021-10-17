import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy7uTUWqdQqkOX44hsBs5p52XOi6sfX5M",
  authDomain: "clothingstore-69f4d.firebaseapp.com",
  projectId: "clothingstore-69f4d",
  storageBucket: "clothingstore-69f4d.appspot.com",
  messagingSenderId: "1041426100685",
  appId: "1:1041426100685:web:02aab1fffa746d9bc85484",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
