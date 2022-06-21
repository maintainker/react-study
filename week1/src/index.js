import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import First from "./Components/First";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <First num={0} />
  </React.StrictMode>
);
