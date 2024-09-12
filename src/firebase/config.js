import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "twittermain-react.firebaseapp.com",
  projectId: "twittermain-react",
  storageBucket: "twittermain-react.appspot.com",
  messagingSenderId: "60504074535",
  appId: "1:60504074535:web:06babb471393dc717e6102",
};

const app = initializeApp(firebaseConfig);
