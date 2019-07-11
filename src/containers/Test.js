import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify"
import config from '../config'
import response from '../response'
import {Col, Row} from 'react-bootstrap'

export default class Test extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="Home">
                <div className="lander">
                    Borta D:
                </div>
            </div>
        );
    };
}
