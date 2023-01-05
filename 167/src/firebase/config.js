import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwf-hUGb7_uKRdzEeTbNJM-t63p6bianI",
  authDomain: "writenode.firebaseapp.com",
  projectId: "writenode",
  storageBucket: "writenode.appspot.com",
  messagingSenderId: "957707337787",
  appId: "1:957707337787:web:d69d5537207ea631fe9c1e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

