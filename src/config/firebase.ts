import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "gobet-admin-dashboard.firebaseapp.com",
  databaseURL: "https://gobet-admin-dashboard-default-rtdb.firebaseio.com",
  projectId: "gobet-admin-dashboard",
  storageBucket: "gobet-admin-dashboard.appspot.com",
  messagingSenderId: "1036518452845",
  appId: "1:1036518452845:web:20e0deac10fa5754541964",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
