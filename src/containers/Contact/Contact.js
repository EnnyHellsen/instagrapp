import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact-image"></div>
        <div className="contact">
          <div className="contact-text-box">
            <h1 className="contact-headline"> Hör av dig vetja! </h1>
            <p className="contact-paragraph"> Har du hittat något du tycker om? Eller har du en egen idé du vill se bli verklighet? Välkommen att kontakta mig angående beställningar, samarbeten eller andra kloka funderingar!</p>
          </div>
          <div className="contact-info">
            <p> <strong> Instagram </strong> @studionorahellsen </p>
            <p> <strong> Email </strong> nora.h-j(@)live.se </p>
            <p> <strong> Telefon </strong> +46 738 326 732 </p>
          </div>
        </div>
      </React.Fragment>
    );
  };
}
