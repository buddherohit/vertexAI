import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "codeeditor-a3c93.firebaseapp.com",
  projectId: "codeeditor-a3c93",
  storageBucket: "codeeditor-a3c93.firebasestorage.app",
  messagingSenderId: "573205547503",
  appId: "1:573205547503:web:1df8e947d16d199042ce1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()