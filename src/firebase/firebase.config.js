// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqfO4CsRiE-mwo6mEYvT6Y4JGE3sznjTI",
  authDomain: "react-new-form.firebaseapp.com",
  projectId: "react-new-form",
  storageBucket: "react-new-form.appspot.com",
  messagingSenderId: "371993303528",
  appId: "1:371993303528:web:aa8c78a68548c83a702c5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;