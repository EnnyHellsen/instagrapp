import React from "react";
import './Footer.css';

const Footer = ({ ...props }) => {

    return (
        <div className="footer" {...props}>
            <div className="social">
                <p> Följ mig på sociala medier </p>
                <a href="https://www.instagram.com/norahellsenjewellery/">
                    <img alt="instagram-logo" className="instagram-logo" src="https://image.flaticon.com/icons/png/512/87/87390.png" />
                </a>
            </div>

            <h3> Nora Hellsén Jewellery </h3>
            <p> Din silversmed för alla lägen. Om du är intresserad av ett föremål på min portfolio så tveka inte att höra av dig. Jag gör specialbeställningar till smycken, assesoarer och korpus <a href="/kontakt"> Kontaka mig här </a></p>
            <p className="second-footer"> Website made with ♥ by Enny</p>
        </div>
    )
};

export default Footer;