import React from "react";
import "./Hero.css";
import chevron from './chevron.svg';

const Hero = ({ activePos }) => {

  return (
    <div className="hero">
      <h1 className={activePos ? 'active' : ''}> Nora Hellsén Jewellery </h1>
      <a href="/#start">
        <img src={chevron} />
      </a>
    </div>
  )
}

export default Hero;