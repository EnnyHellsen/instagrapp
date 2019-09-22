import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify"
import config from '../config'
import response from '../response'
import { Col, Row } from 'react-bootstrap'

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
