import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./global_scss/global_style.scss";
import { BrowserRouter } from 'react-router-dom';
// import ViewProvider from './context';
// import store from "./store/store";
import store from "./store/newStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App className="global" />
    </Provider>
  </BrowserRouter>
);
