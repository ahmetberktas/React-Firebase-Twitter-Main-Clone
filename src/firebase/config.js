import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "twittermain-react.firebaseapp.com",
  projectId: "twittermain-react",
  storageBucket: "twittermain-react.appspot.com",
  messagingSenderId: "60504074535",
  appId: "1:60504074535:web:06babb471393dc717e6102",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
