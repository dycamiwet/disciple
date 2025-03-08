// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE9CxhaBsJfNJTfEMbKiGTTXz-sT4vkjM",
  authDomain: "disciple-a9d35.firebaseapp.com",
  projectId: "disciple-a9d35",
  storageBucket: "disciple-a9d35.appspot.com",  // Fixed typo in your storageBucket
  messagingSenderId: "823685962395",
  appId: "1:823685962395:web:1a9a1518f9833dfab2043e",
  measurementId: "G-6Q5YTVT41F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
