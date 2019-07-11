import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes"
import Header from "./containers/common/Header";
import Footer from "./containers/common/Footer";


class App extends Component {
    render() {
        // Share these to all pages
        const childProps = {
            name: "Nora Hellsen" // Ex
        };

        return (
            // Only render ui if the app is not currently authenticating
            <div className="App">
                <Header />
                <Routes childProps={childProps}/>
                <Footer/>
            </div>
        );
    }

}

export default App;
