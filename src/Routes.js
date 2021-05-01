import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import About from "./containers/About/About";
import ImagePage from "./containers/ImagePage/imagePage";
import { ImageContext } from './App'


export default () => {
  const instagramData = React.useContext(ImageContext);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/kontakt">
        <Contact />
      </Route>
      <Route exact path="/om-mig">
        <About />
      </Route>
      {/* {
        instagramData.length > 1 && instagramData.map(item => ( */}
      <Route path="/portfolio/:id" children={<ImagePage />} />
      {/* //   ))
      // } */}
    </Switch>
  )
};
