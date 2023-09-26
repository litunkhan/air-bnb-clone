// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKkwZLRBwfVwAkeQ5AUysnjZDubjLojQg",
  authDomain: "air-cnc-c46b4.firebaseapp.com",
  projectId: "air-cnc-c46b4",
  storageBucket: "air-cnc-c46b4.appspot.com",
  messagingSenderId: "624722437652",
  appId: "1:624722437652:web:a30072e6b1e8dcce9ba901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app