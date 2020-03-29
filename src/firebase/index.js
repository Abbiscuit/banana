import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCmBkOgy38GjjoBUBhWUh9IashmHIMSfHA',
  authDomain: 'firelatte-4876e.firebaseapp.com',
  databaseURL: 'https://firelatte-4876e.firebaseio.com',
  projectId: 'firelatte-4876e',
  storageBucket: 'firelatte-4876e.appspot.com',
  messagingSenderId: '1064469103367',
  appId: '1:1064469103367:web:df1067ebec169d5acdbba2',
  measurementId: 'G-XSDK11DJVG'
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
