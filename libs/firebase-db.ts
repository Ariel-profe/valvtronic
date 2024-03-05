// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdvCnQkbqYTuU8RQWSVsc8CkB2xO4N5Us",
  authDomain: "e-shop-vid-2c940.firebaseapp.com",
  projectId: "e-shop-vid-2c940",
  storageBucket: "e-shop-vid-2c940.appspot.com",
  messagingSenderId: "1008821779750",
  appId: "1:1008821779750:web:32a431c5ca9f3e9d3515e7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;