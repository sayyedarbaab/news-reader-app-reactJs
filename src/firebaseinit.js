// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBojMKMNZy_k_HViZks9bugmlfeNeL4C5o",
  authDomain: "blogging-app-d4e68.firebaseapp.com",
  projectId: "blogging-app-d4e68",
  storageBucket: "blogging-app-d4e68.appspot.com",
  messagingSenderId: "672775429010",
  appId: "1:672775429010:web:25b1886e254a5af4ef3f4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getAuth(app);









