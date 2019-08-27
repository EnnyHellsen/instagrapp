import { Link } from "react-router-dom";
import React from "react";

export default ({ extra, ...props }) => {
  return (
    <div className="Header" {...props}>
      <Link to="/"> Hemma </Link>
      <Link to="/test"> Borta </Link>
      <Link to={extra}> {extra} </Link>
    </div>
  );
};
