// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Z0jqzaa4Oxi_hlyKn1uH7Q2-5_llWQc",
  authDomain: "trabalhog2-2999b.firebaseapp.com",
  databaseURL: "https://trabalhog2-2999b-default-rtdb.firebaseio.com/",
  projectId: "trabalhog2-2999b",
  storageBucket: "trabalhog2-2999b.appspot.com",
  messagingSenderId: "251720842768",
  appId: "1:251720842768:web:3347ec7efe727b351f5495",
  measurementId: "G-QF4GNDDN53",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, app };
