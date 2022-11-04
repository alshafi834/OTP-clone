// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH5sOnMGsccWTLAq_FypZ0F-sV2Y-GJ8s",
  authDomain: "otp-clone.firebaseapp.com",
  projectId: "otp-clone",
  storageBucket: "otp-clone.appspot.com",
  messagingSenderId: "516112339777",
  appId: "1:516112339777:web:a99254629cb0b6bd8287c0",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
