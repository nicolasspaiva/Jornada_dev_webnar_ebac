import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBy9bGNncRvyhWjc8KaIwib4EcztL4xJ2U",
  authDomain: "tiktok-clone-b88ba.firebaseapp.com",
  projectId: "tiktok-clone-b88ba",
  storageBucket: "tiktok-clone-b88ba.appspot.com",
  messagingSenderId: "24896024477",
  appId: "1:24896024477:web:667fc3e9581d0b426cc974",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
