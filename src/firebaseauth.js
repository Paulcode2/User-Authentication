import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1cycdNpb3dnqLJ_BPllHWYTfTaxALGHs",
  authDomain: "kaqil-1b952.firebaseapp.com",
  projectId: "kaqil-1b952",
  storageBucket: "kaqil-1b952.appspot.com",
  messagingSenderId: "419123965901",
  appId: "1:419123965901:web:595b6a2d9933453ad71e84",
  measurementId: "G-63G0H937CD"
};



export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);