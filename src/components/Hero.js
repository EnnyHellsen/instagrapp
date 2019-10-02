import React from "react";
import "./Hero.css";
import chevron from './chevron.svg';
import logo from '../containers/common/nora_logga.png';

const Hero = ({ activePos }) => {

  return (
    <div className="hero">
      <img className="hero-logo" src={logo} />
      <h1 className={activePos ? 'active' : ''}> Nora Hellsén Jewellery </h1>
      <p> intro text hello hello this my jam jag är silversmed och jag är coolast i stan för mina smycken de äger verkligen</p>
      <a href="/#start">
        <img className="chevron" src={chevron} />
      </a>
    </div>
  )
}

export default Hero;
