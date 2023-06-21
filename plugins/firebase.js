import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// import { getStorage, ref } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3jggskF0IhK79pn92RyGcMPl23j8I1AU",
  authDomain: "whatsapp-integration-68ba4.firebaseapp.com",
  projectId: "whatsapp-integration-68ba4",
  storageBucket: "whatsapp-integration-68ba4.appspot.com",
  messagingSenderId: "567456672408",
  appId: "1:567456672408:web:0c50c2b26a70fe78fd7eed",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const users = collection(db, "Users");
// const companies = collection(db, "Companies");

export {
  app,
  db,
  users,
//   companies,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
};
