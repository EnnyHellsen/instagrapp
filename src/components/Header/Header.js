import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import logo from './nora_logga.png';

const Header = ({ extra, ...props }) => {
  return (
    <div className="header" {...props}>
      <Link to="/om-mig"> Om mig </Link>
      <Link to="/">
        {/* <img alt="logo" className="logo" src={logo} /> */}
        <div className="home-button">
          <div></div>
        </div>
      </Link>
      <Link to="/kontakt"> Kontakt </Link>
    </div>
  );
};

export default Header;