import React from "react";
import './Footer.css';

const Footer = ({ ...props }) => {

    return (
        <div className="footer" {...props}>
            <div className="footer-top">
                <a href="https://www.instagram.com/norahellsenjewellery/">
                    <img alt="instagram-logo" className="instagram-logo" src="https://image.flaticon.com/icons/png/512/87/87390.png" />
                </a>
                <p> Följ mig på Instagram </p>
            </div>

            <div className="footer-main">
                <h3 className="footer-heading"> Nora Hellsén Ädelmetallsmed</h3>
                <p className="footer-paragraph"> Jag skapar på egen inspiration och tar även specialbeställningar anpassade efter vad precis du vill ha. Välkommen att kika runt och kontakta mig gärna <a href="/kontakt"> här </a></p>
                <p className="footer-bottom"> Website made with ♥ by Enny</p>
            </div>
        </div>
    )
};

export default Footer;