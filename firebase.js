// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  onValue,
  push,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCY2Uidl1vhR2Cz9reRO3QXASokIHfEo2Q",
  authDomain: "live-room-game-thingy.firebaseapp.com",
  databaseURL: "https://live-room-game-thingy-default-rtdb.firebaseio.com",
  projectId: "live-room-game-thingy",
  storageBucket: "live-room-game-thingy.firebasestorage.app",
  messagingSenderId: "329589817342",
  appId: "1:329589817342:web:0544d6c99e35e815ae8aaf",
  measurementId: "G-PL9KFRVKXP"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {
  db,
  ref,
  set,
  get,
  update,
  remove,
  onValue,
  push,
  serverTimestamp
};
