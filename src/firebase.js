import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC49diNjjD2qUiEo_Ry_ZPxtYhN2YB2MjA",
  authDomain: "aker-reports.firebaseapp.com",
  projectId: "aker-reports",
  storageBucket: "aker-reports.firebasestorage.app",
  messagingSenderId: "554604510490",
  appId: "1:554604510490:web:8457a26f3e546710f8c0a3",
  measurementId: "G-9VWC66MG8P"
};

const app = initializeApp(firebaseConfig);

getAnalytics(app);

export const db = getFirestore(app);