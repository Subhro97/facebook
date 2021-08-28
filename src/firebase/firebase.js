import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

firebase.initializeApp({
  
});

const firestore = firebase.firestore();

export const database = {
    users: firestore.collection('users'),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp
};

export const storage = firebase.storage();
export const auth = firebase.auth();
