const { initializeApp } = require("firebase/app");
const { get, set, ref, getDatabase } = require("firebase/database");

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

async function writeData(uid, name, email) {
  await set(ref(database, "users/" + uid), {
    username: name,
    email: email,
  });
}

module.exports = { writeData };
