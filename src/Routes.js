import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import About from "./containers/About/About";
import ImagePage from "./containers/ImagePage/imagePage";
import { ImageContext } from './App'


export default () => {
  const instagramData = React.useContext(ImageContext);

  const tempArray = [17887562093010135, 17929468396534963, 17848280003570046];

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/kontakt" exact component={Contact} />
      <Route path="/om-mig" exact component={About} />
      {
        tempArray.length > 1 && tempArray.map(item => (
          <Route key={item} path={`/portfolio/${item}`} component={ImagePage} />
        ))
      }
    </Switch>
  )
};
