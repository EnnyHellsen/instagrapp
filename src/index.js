import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Amplify from "aws-amplify";

Amplify.configure({
    API: {
        endpoints: [
            {
                name: "notes",
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION
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
