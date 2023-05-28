// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3CnVtN1Cx2_9EKc-HaynUB6bE32rlEpc",
    authDomain: "online-shop-fc70c.firebaseapp.com",
    projectId: "online-shop-fc70c",
    storageBucket: "online-shop-fc70c.appspot.com",
    messagingSenderId: "126485897835",
    appId: "1:126485897835:web:09c3ec81b693041403472e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore= getFirestore(app);