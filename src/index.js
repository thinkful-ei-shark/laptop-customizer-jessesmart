import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import features from "./store";

ReactDOM.render(<App features={features} />, document.getElementById("root"));
