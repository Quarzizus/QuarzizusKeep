import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBV5eHZg2rvmkZC9dpoJwTOtvVkY9WmiFk",
  authDomain: "quarzizuskeep.firebaseapp.com",
  databaseURL: "https://quarzizuskeep-default-rtdb.firebaseio.com",
  projectId: "quarzizuskeep",
  storageBucket: "quarzizuskeep.appspot.com",
  messagingSenderId: "817200885254:web:b071eff99cca230cb75d87",
  appId: "817200885254",
};

const app = initializeApp(firebaseConfig);

export { firebaseConfig, app };
