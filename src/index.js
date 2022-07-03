import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import AppHeader from "./AppHeader/AppHeader";
import AppAbout from "./AppAbout/AppAbout";
import AppFooter from "./AppFooter/AppFooter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="page-container">
      <AppHeader />
      <AppAbout />
      <App />
      <AppFooter />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
