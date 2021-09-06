import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyDrhThVDQdYqfEwNmISJOpXMqTX4QtstPQ",
  authDomain: "facebook-clone-3654d.firebaseapp.com",
  projectId: "facebook-clone-3654d",
  storageBucket: "facebook-clone-3654d.appspot.com",
  messagingSenderId: "429731115618",
  appId: "1:429731115618:web:d5a68ced028d8b052d573b",
});

const firestore = firebase.firestore();

export const database = {
  users: firestore.collection("users"),
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = firebase.storage();
export const auth = firebase.auth();
