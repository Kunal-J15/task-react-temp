import React from "react";
import "./Error.css";
import DivWrapper from "../UI/DivWrapper";

function Error(props) {
    return (
        <div className="error-div">
        <DivWrapper>
            <h3>{props.error}</h3>
            <button className="error-button" onClick={props.resetError}>Okay</button>
            </DivWrapper>
        </div>
    )
}

export default Error;