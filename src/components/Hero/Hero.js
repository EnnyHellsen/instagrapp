import React from "react";
import "./Hero.css";
import chevron from './chevron.svg';
import logo from './nora-logga-transparent.png';

const Hero = ({ activePos }) => {

  return (
    <div className="hero">
      <img alt="logo" className="hero-logo" src={logo} />
      <h1 className={activePos ? 'active' : ''}> Nora Hellsén smyckekonst</h1>
      <p className="hero-description"> Välkommen till min portfolio! Jag är för närvarande student inom metallkonsten och skapar främst smycken av ädelmetall och andra material.</p>
      <a href="/#start">
        <img alt="down-arrow" className="chevron" src={chevron} />
      </a>
    </div>
  )
}

export default Hero;
