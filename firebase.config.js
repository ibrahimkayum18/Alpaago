// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCITuWE1wntC1Du9kdmZ5Jyq5hmDQrCm54",
  authDomain: "alpaago-63347.firebaseapp.com",
  projectId: "alpaago-63347",
  storageBucket: "alpaago-63347.appspot.com",
  messagingSenderId: "344354111503",
  appId: "1:344354111503:web:b668cb454674d02123637a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;