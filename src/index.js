import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";

import Home from "./components/home";
import Portfolio from "./components/portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter basename="/">
    <Switch>
      <Route path="/home" render={(props) => <Home {...props} />} />
      <Route path="/portfolio" render={(props) => <Portfolio {...props} />} />

      <Redirect to="/home" />
    </Switch>
  </HashRouter>
);