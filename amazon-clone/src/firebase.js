// import firebase from 'firebase';


// const firebaseConfig = {
//   apiKey: "AIzaSyCC3ZMqDPXew1iBtyEkEOI6ndOvuub65vQ",
//   authDomain: "challenge-876c6.firebaseapp.com",
//   projectId: "challenge-876c6",
//   storageBucket: "challenge-876c6.appspot.com",
//   messagingSenderId: "615155254397",
//   appId: "1:615155254397:web:7a9f345c8fee6ce5381d14",
//   measurementId: "G-3345X654L3"
// };

//   const firebaseApp =firebase.initializeApp(firebaseConfig);

//   const db=firebaseApp.firestore();
//   const auth = firebase.auth();

//   export {db,auth};


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC3ZMqDPXew1iBtyEkEOI6ndOvuub65vQ",
  authDomain: "challenge-876c6.firebaseapp.com",
  projectId: "challenge-876c6",
  storageBucket: "challenge-876c6.appspot.com",
  messagingSenderId: "615155254397",
  appId: "1:615155254397:web:7a9f345c8fee6ce5381d14",
  measurementId: "G-3345X654L3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
