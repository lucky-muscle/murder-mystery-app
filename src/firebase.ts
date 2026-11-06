import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqLiSSaX_7cV92yEp6J_YBnUJx94yTnwE",
  authDomain: "murdermystery-f537e.firebaseapp.com",
  projectId: "murdermystery-f537e",
  storageBucket: "murdermystery-f537e.firebasestorage.app",
  messagingSenderId: "184071396432",
  appId: "1:184071396432:web:0160e30d26f331bca20555",
  measurementId: "G-9FBDNTFK4Q",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);