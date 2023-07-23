import "./common.css";

import React from "react";
import ReactDOM from "react-dom/client";

console.log("Hello from client/home.tsx");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h3>Im home!!!</h3>
  </React.StrictMode>
);
