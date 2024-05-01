import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXPhYZXHNLS1lyOgLUO2sKRUYzh2oYDgc",
  authDomain: "new-chat-c5018.firebaseapp.com",
  projectId: "new-chat-c5018",
  storageBucket: "new-chat-c5018.appspot.com",
  messagingSenderId: "286516268347",
  appId: "1:286516268347:web:c5ac8b7f5d770e64a1fb1e",
  measurementId: "G-3LKWTNE42E"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);