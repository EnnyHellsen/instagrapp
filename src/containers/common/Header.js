import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

export default ({ extra, ...props }) => {
  return (
    <div className="header" {...props}>
      <Link to="/test"> Testsida </Link>
      <Link to="/"> HOME(icon) </Link>
      <Link to={extra}> {extra} </Link>
    </div>
  );
};
