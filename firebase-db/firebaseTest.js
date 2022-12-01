// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { get, getDatabase, set, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvVpxRwKBbRyncwhFQa_5zAprdjxkp5NU",
  authDomain: "mb-tintro.firebaseapp.com",
  projectId: "mb-tintro",
  storageBucket: "mb-tintro.appspot.com",
  messagingSenderId: "283446359172",
  appId: "1:283446359172:web:0f1804e20fa8542142fed1",
  measurementId: "G-SKPGSKYEDB",
  databaseURL:
    "https://mb-tintro-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

async function writeData(uid, name, email) {
  await set(ref(database, "users/" + uid), {
    username: name,
    email: email,
  });
}

writeData(3, "Hieu", "gmail");
