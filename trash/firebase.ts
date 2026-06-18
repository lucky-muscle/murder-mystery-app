import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "あなたのapiKey",
  authDomain: "murdermystery-f537e.firebaseapp.com",
  projectId: "murdermystery-f537e",
  storageBucket: "murdermystery-f537e.firebasestorage.app",
  messagingSenderId: "184071396432",
  appId: "1:184071396432:web:0160e30d26f331bca20555",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);