import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify"
import config from '../config'

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true
        }
        this.renderInstagram();
    }

    renderInstagram = async () => {
        this.setState({ isLoading: true });

        try {
           const response = await  API.get("instagram", "media/recent/", {
               queryStringParameters: {"access_token":config.instagram.accessToken}
            });
            this.setState({ isLoading: false, response: response });
           console.log(response)
        } catch (e) {
            console.log(e)
            console.log(e.message)
            console.log(e.body)
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <div className="Home">
                <div className="lander">
                    { this.state.isLoading && <h1>Loading Instagram</h1> }
                    { typeof this.state.response !== 'undefined' && JSON.stringify(this.state.response).toString()}
                </div>
            </div>
        );
    }
}
