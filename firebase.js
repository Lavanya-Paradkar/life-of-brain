import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API,
    authDomain: "life-of-brain.firebaseapp.com",
    projectId: "life-of-brain",
    storageBucket: "life-of-brain.appspot.com",
    messagingSenderId: process.env.FIREBASE_MSG,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MID
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();  
const db = getFirestore();
const storage = getStorage();
// const analytics = () => {
//   if (typeof window !== "undefined") {
//     return getAnalytics()
//   } else {
//     return null
//   }
// }

export { app, db, storage };