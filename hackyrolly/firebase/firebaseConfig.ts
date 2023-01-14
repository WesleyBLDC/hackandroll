// import { initializeApp} from "firebase/app";
// // import "firebase/auth";
// import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
export 


const db = firebaseApp.firestore();


// export const app = initializeApp(firebaseConfig);
// export const database = getFirestore(app);

// if (!firebase.apps.length) {
//   firebase.initializeApp(clientCredentials);
// }

// export default firebaseConfig;