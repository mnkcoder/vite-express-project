import "./common.css";

import React from "react";
import ReactDOM from "react-dom/client";

console.log("Hello from client/home.tsx");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>Im home</h1>
  </React.StrictMode>
);
