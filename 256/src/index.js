import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx7YBvGer7ntu08Z0jE56q6ooI-UZFYps",
  authDomain: "notnotion-defa4.firebaseapp.com",
  projectId: "notnotion-defa4",
  storageBucket: "notnotion-defa4.appspot.com",
  messagingSenderId: "63313643087",
  appId: "1:63313643087:web:fd1e442f73022ffa660c3a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "movies");


getDocs(colRef)
    .then(data => {
        let movies = [];
        data.docs.forEach(document => {
            movies.push({...document.data(), id: document.id});
        });
        console.log(movies);
    })
    .catch(error => {
        console.log(error);
    });