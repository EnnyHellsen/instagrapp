import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import Header from "./containers/common/Header";
import Footer from "./containers/common/Footer";

class App extends Component {
  render() {
    // Share these to all pages
    const childProps = {
      name: "Om mig" // Ex
    };

    return (
      // Only render ui if the app is not currently authenticating
      <div className="App">
        <Header extra={childProps.name} />
        <Routes childProps={childProps} />
        <Footer />
      </div>
    );
  }
}

export default App;
