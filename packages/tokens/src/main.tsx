import React from "react";
import ReactDOM from "react-dom/client";

import "./themes/global.css";
import Test from "./app/test";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
