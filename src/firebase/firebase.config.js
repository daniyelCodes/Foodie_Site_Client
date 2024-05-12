// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
    apiKey: "AIzaSyBQb0RAf6UI7xQLMVUFYNrcKZseld4Nba8",
    authDomain:"foodie-db-aae6f.firebaseapp.com",
    projectId: "foodie-db-aae6f",
    storageBucket: "foodie-db-aae6f.appspot.com",
    messagingSenderId: "360884169973",
    appId: "1:360884169973:web:5c8aace9b96b9525d3a9bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;