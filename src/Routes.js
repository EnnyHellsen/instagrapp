import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import About from "./containers/About/About";
import Image from "./containers/Image";

export default () => {
  const [pages, setPages] = React.useState([]);

  // useEffect(() => {
  //   fetch('/.netlify/functions/getAllMedia', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(data => {
  //       return data.text()
  //     })
  //     .then(data => {
  //       setPages(JSON.parse(data))
  //     })
  //     .catch(error => {
  //       console.log('err:', error);
  //     });
  // })

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/kontakt" exact component={Contact} />
      <Route path="/om-mig" exact component={About} />
      <Route path="/portfolio/:slug" component={Image} />

      {/* {
        pages.map(route => (
          <Route key={route.id} path={`/portfolio/${route.id}`} component={Image} />
        ))
      } */}
    </Switch>
  )
};
