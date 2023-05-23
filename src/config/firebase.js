
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCo_TZfpqUep3yGPidxa55cpX_6Kj9dJA8",
  authDomain: "torbejarabi-ba69f.firebaseapp.com",
  projectId: "torbejarabi-ba69f",
  storageBucket: "torbejarabi-ba69f.appspot.com",
  messagingSenderId: "307903351180",
  appId: "1:307903351180:web:28af420ab89811f69d6ea9",
  measurementId: "G-MV07B99YLD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// const storage = getStorage(app);
