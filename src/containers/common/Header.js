import {Link} from "react-router-dom";
import React from "react";


export default ({
                    ...props
                }) => {
    return (
        <div className="Header" {...props}>
            <Link to="/"> Hemma </Link>
            <Link to="/test"> Borta </Link>
        </div>
    )
};