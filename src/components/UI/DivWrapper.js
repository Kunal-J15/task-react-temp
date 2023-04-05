import React from "react";
import "./DivWrapper.css";

function DivWrapper(props) {
    return (
        <div className="wrapper">{props.children}</div>
    )
}

export default DivWrapper;