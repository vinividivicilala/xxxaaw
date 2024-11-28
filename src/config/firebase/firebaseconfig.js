
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPxiwxwQ1BqJxOuFRB48cQrNVO9pL5l0k",
  authDomain: "mencintai-diri.firebaseapp.com",
  projectId: "mencintai-diri",
  storageBucket: "mencintai-diri.firebasestorage.app",
  messagingSenderId: "983495689606",
  appId: "1:983495689606:web:1f96f61e70ad0d92401807",
  measurementId: "G-CPN7J3C56B"
};

 const app = initializeApp(firebaseConfig);

 export default app