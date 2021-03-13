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
      <Route path="/" exact component={Home} />
      <Route path="/kontakt" exact component={Contact} />
      <Route path="/om-mig" exact component={About} />
      {
        instagramData.map(item => (
          <Route key={item.id} path={`/portfolio/${item.id}`} component={ImagePage} />
        ))
      }
    </Switch>
  )
};
