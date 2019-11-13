import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-text-box">
          <h1> Kontakta mig </h1>
          <p> Vid frågor, förfrågningar eller om du vill skicka fanmail kontakta mig genom dessa medier. Jag gör allt inom silversmycken, kan även göra guldsmycken på beställning bara för att jag är så bra. Om du är intressead av det jag har gör, skriv! </p>
        </div>
        <div className="contact-info">
          <p> @norahellsenjewellery </p>
          <p> nora.h-j@live.se </p>
          <p> +46738 326 732 </p>
        </div>
      </div>
    );
  };
}
