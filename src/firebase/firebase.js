import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbPUuQlx2i_sTJ6KRLlx6MKdgzcR60ITU",
  authDomain: "reviewit-54ef7.firebaseapp.com",
  projectId: "reviewit-54ef7",
  storageBucket: "reviewit-54ef7.appspot.com",
  messagingSenderId: "465008050742",
  appId: "1:465008050742:web:a5aa97b829567e10820e97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
