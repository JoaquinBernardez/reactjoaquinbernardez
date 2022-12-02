import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAIGDnZllYvmLqFKkyyVJv8w_xQBpR2n8M",
	authDomain: "jcompany-joaquinbernardezz.firebaseapp.com",
	projectId: "jcompany-joaquinbernardezz",
	storageBucket: "jcompany-joaquinbernardezz.appspot.com",
	messagingSenderId: "698291790391",
	appId: "1:698291790391:web:cdc1f7296211a04971d5b2",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
