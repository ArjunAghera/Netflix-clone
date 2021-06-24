import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "netflix-clone-1f408.firebaseapp.com",
  projectId: "netflix-clone-1f408",
  storageBucket: "netflix-clone-1f408.appspot.com",
  messagingSenderId: "21189987554",
  appId: "1:21189987554:web:8876fa0401f91ddd58a2bb",
  measurementId: "G-FM8JWV6HZF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
