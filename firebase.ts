// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLiQmXHa4oeuoPJ3j_ZY43ekeUp7QotlM",
  authDomain: "netflix-clone-yt-2e018.firebaseapp.com",
  projectId: "netflix-clone-yt-2e018",
  storageBucket: "netflix-clone-yt-2e018.appspot.com",
  messagingSenderId: "723147461855",
  appId: "1:723147461855:web:06de76ee6f0d0639fa856a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }