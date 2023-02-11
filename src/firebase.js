import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDIG1SVXwwJTFSFTXvbOw2nE-VTt0dV38",
  authDomain: "netflix-f98c3.firebaseapp.com",
  projectId: "netflix-f98c3",
  storageBucket: "netflix-f98c3.appspot.com",
  messagingSenderId: "794612936997",
  appId: "1:794612936997:web:0e45144dc75e413948aacc",
  measurementId: "G-4KQEH90XFM"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = getAuth(firebaseApp);

export { auth };
export default db;