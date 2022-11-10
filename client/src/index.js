import React from "react";
import ReactDOM from "react-dom/client";
import { Manipulation } from "swiper";
import App from "./components/App";
import "./global_scss/global_style.scss";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App className="global" />);

export default App;