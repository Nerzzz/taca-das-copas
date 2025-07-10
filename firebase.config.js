import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc9eZJLNXVn2fPtNKBa5vbqnbHhqU4i94",
  authDomain: "tacadascopas.firebaseapp.com",
  databaseURL: "https://tacadascopas-default-rtdb.firebaseio.com",
  projectId: "tacadascopas",
  storageBucket: "tacadascopas.firebasestorage.app",
  messagingSenderId: "994866362078",
  appId: "1:994866362078:web:f0a3fa30b61b9502ad344f",
  measurementId: "G-0RPKBNN12N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);