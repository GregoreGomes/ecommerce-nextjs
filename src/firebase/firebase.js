import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjVklllVqb0PlSYK_JjfmTZB0_eiezqCs",
  authDomain: "e-commerce-13c22.firebaseapp.com",
  projectId: "e-commerce-13c22",
  storageBucket: "e-commerce-13c22.appspot.com",
  messagingSenderId: "787276191189",
  appId: "1:787276191189:web:328bcc19141051c5c1595c",
  databaseURL:"https://e-commerce-13c22-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app)

export{auth, database};