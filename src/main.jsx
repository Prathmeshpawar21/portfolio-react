import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Global (Tailwind/normalize/etc)
import "./App.css";   // App-level (optional/additional)
import '../src/styles/globals.scss'; // Global styles (if any)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
