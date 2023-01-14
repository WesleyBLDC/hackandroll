// import { initializeApp} from "firebase/app";
// // import "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// import firebase from 'firebase/compat/app';

// import firebase from "firebase/app";
// import "firebase/firestore"; 
// import * as firebase from 'firebase/app'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
