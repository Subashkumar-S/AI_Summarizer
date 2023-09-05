// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY
const firebaseConfig = {
  apiKey: rapidApiKey,
  authDomain: "ai-summarizer-9e13c.firebaseapp.com",
  projectId: "ai-summarizer-9e13c",
  storageBucket: "ai-summarizer-9e13c.appspot.com",
  messagingSenderId: "467497790312",
  appId: "1:467497790312:web:bdeb57d91501fdaf66c4dd",
  measurementId: "G-F4R5XJH3EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);