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
      <Route path="/">
        <Home />
      </Route>
      <Route path="/kontakt">
        <Contact />
      </Route>
      <Route path="/om-mig">
        <About />
      </Route>
      {
        instagramData.length > 1 && instagramData.map(item => (
          <Route key={item.fields.id} path={`/portfolio/${item.fields.id}`}>
            <ImagePage />
          </Route>
        ))
      }
    </Switch>
  )
};
