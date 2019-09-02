import React from "react";
import "./Hero";

function Hero({ image }) {
    return (
        <div className="hero">
            <img src={image} />
            <h1> Title </h1>
            <h4> Subtitle </h4>
        </div>
    )
}

export default Hero