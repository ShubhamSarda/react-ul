import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp, updateDoc} from "firebase/firestore";


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
const qRef = query(colRef, where("category", "==", "drama"), orderBy("createdAt"));


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


// onSnapshot(colRef, (data) => {
//     let movies = [];
//     data.docs.forEach(document => {
//         movies.push({...document.data(), id: document.id});
//     });
//     console.log(movies);
// });


const addForm = document.querySelector(".add");
addForm.addEventListener("submit", event => {
    event.preventDefault();
    addDoc(colRef, {
        name: addForm.name.value,
        category: addForm.category.value,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    })
    .then(() => {
        addForm.reset();
    });
});


const deleteForm = document.querySelector(".delete");
deleteForm.addEventListener("submit", event => {
    event.preventDefault();
    
    const documentReference = doc(db, "movies", deleteForm.id.value);
    deleteDoc(documentReference)
    .then(() => {
            deleteForm.reset();
    });
});


const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", event => {
    event.preventDefault();

    const documentReference = doc(db, "movies", updateForm.id.value);
    updateDoc(documentReference, {
        name: updateForm.name.value,
        updatedAt: serverTimestamp()
    })
    .then(() => {
        updateForm.reset();
    });
});