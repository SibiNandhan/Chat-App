import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/header";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
    <App />
  </React.StrictMode>
);
