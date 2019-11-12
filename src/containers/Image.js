import React, { Component } from "react";

const Image = ({ match, location }) => {

    return (
        <div>
            <p> bild </p>
            <p> bild </p>
            <p> bild </p>
            <code>{JSON.stringify(match, null, 2)}</code>
            <p> bild </p>
            <code>{JSON.stringify(location, null, 2)}</code>
        </div>
    )
}

export default Image;
