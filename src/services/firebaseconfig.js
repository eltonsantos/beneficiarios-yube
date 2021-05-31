import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALt2jgQYFo1sRiYOJqoUMXsbOf3XVsAlY",
  authDomain: "beneficiarios-yube.firebaseapp.com",
  projectId: "beneficiarios-yube",
  storageBucket: "beneficiarios-yube.appspot.com",
  messagingSenderId: "706223904141",
  appId: "1:706223904141:web:73098fb31b6c7701f119c4",
  measurementId: "G-CWWVWGCC7V",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const store = fire.firestore();

export { store }
