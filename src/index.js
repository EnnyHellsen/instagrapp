import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import config from './config.js'
import Amplify from "aws-amplify";

Amplify.configure({
    API: {
        endpoints: [
            {
                name: "instagram",
                endpoint: config.instagram.endpoint,
                accessToken: config.instagram.accessToken
            },
        ]
    }
});

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
