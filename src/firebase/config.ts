const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "quarzizuskeep.firebaseapp.com",
  databaseURL: "https://quarzizuskeep-default-rtdb.firebaseio.com",
  projectId: "quarzizuskeep",
  storageBucket: "quarzizuskeep.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export { firebaseConfig };
