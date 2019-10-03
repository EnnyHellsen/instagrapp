import React, { Component } from "react";
import "./Home.css";

export default class Test extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="contact">
                <h1> Kontaktsida </h1>
                <p> @norahellsenjewellery </p>
                <p> nora.h-j@live.se </p>
                <p> +46738 326 732 </p>
            </div>
        );
    };
}
