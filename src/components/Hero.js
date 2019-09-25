import React from "react";
import "./Hero.css";
import chevron from './chevron.svg';

const Hero = ({ activePos }) => {
    return (
        <div className="hero">
            <h1 className={activePos ? 'active' : ''}> Nora Hellsén Jewellery </h1>
            <img onClick={() => console.log('klickad')} src={chevron} />
        </div>
    )
}

export default Hero;