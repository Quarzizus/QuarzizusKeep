import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase/config";
import "./main.css";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
