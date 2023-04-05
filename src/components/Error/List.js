import React from "react";
import "./List.css";

function List(props) {
    return (
        <div className="list-div">
            {props.children}
        </div>
    )
}

export default List;