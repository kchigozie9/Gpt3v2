// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkUCX0GId2HHJViFzrxCy7tQM8yGF04tk",
  authDomain: "ogemeg-1bd6c.firebaseapp.com",
  projectId: "ogemeg-1bd6c",
  storageBucket: "ogemeg-1bd6c.appspot.com",
  messagingSenderId: "881758006405",
  appId: "1:881758006405:web:fba19412c6d203414a8dec",
  measurementId: "G-V4TSL99R3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);