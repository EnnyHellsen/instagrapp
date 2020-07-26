import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="about-heading"> Nora Hellsén </h1>
        <h2 className="about-subheading"> Ädelmetallsmed </h2>
        <p className="about-paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img className="about-img" alt="nora hellsen" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
        <div className="about-experience">
          <h4> Erfarenhet</h4>
          <p> <strong>Pågående - </strong> Smyckekonst Kandidatprogrammet HDK</p>
          <p> Metallformgiving/Silversmide Leksands folkhögskola</p>
          <p> Lärling hos Sofia Sjörén och Lisa Kamal</p>
        </div>
      </div>
    );
  };
}
