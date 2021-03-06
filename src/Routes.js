import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import About from "./containers/About/About";
import Image from "./containers/Image";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/kontakt" exact component={Contact} />
      <Route path="/om-mig" exact component={About} />
      <Route path="/portfolio/:slug" component={Image} />
    </Switch>
  )
};
