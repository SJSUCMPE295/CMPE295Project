import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBRhY61TgBU4o_iav8XPGUevbIcO74fmgs",
  authDomain: "cmpe295-wecare.firebaseapp.com",
  projectId: "cmpe295-wecare",
  storageBucket: "cmpe295-wecare.appspot.com",
  messagingSenderId: "181804813353",
  appId: "1:181804813353:web:a22ff89a9c9c1397292038",
  measurementId: "G-JKZYL2KZQV"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const auth = getAuth(app);
export {auth, storage};