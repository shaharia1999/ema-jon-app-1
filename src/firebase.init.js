// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyD7aJhT5nQUtCC6OoLKQPUqqnx56YmWHPU",
    authDomain: "ema-jon-simple-ea512.firebaseapp.com",
    projectId: "ema-jon-simple-ea512",
    storageBucket: "ema-jon-simple-ea512.appspot.com",
    messagingSenderId: "788842007884",
    appId: "1:788842007884:web:f807db8fd143616cdc93e9"
  }

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
 

export default auth;
