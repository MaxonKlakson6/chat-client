import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import Router from "src/routes";
import { Provider } from "react-redux";
import { store } from "src/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </HashRouter>
);
