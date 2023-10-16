// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApSc58XrD81pNidqWveLCZ1HuxkWIyXlE",
  authDomain: "first-react-64be8.firebaseapp.com",
  projectId: "first-react-64be8",
  storageBucket: "first-react-64be8.appspot.com",
  messagingSenderId: "772584968093",
  appId: "1:772584968093:web:34c67b1b2f6677a25d6974",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
