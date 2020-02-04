// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJbvCSZh0bTTI513n4m7ylj11bGjwHRNA",
    authDomain: "inventory-e9650.firebaseapp.com",
    databaseURL: "https://inventory-e9650.firebaseio.com",
    projectId: "inventory-e9650",
    storageBucket: "inventory-e9650.appspot.com",
    messagingSenderId: "49951724968",
    appId: "1:49951724968:web:796ba822cf6d6cc8f8799d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
