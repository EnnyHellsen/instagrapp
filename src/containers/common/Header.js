import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import logo from './nora_logga.png'

export default ({ extra, ...props }) => {
  return (
    <div className="header" {...props}>
      <Link to="/test"> Testsida </Link>
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <Link to={extra}> {extra} </Link>
    </div>
  );
};
