import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import About from "./containers/About";

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/kontakt" exact component={Contact} />
    <Route path="/om-mig" exact component={About} />
  </Switch>
);
