import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webforge-8f2da.firebaseapp.com",
  projectId: "webforge-8f2da",
  storageBucket: "webforge-8f2da.firebasestorage.app",
  messagingSenderId: "189479953616",
  appId: "1:189479953616:web:f6c2d50cb46e77084e6ad5"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()