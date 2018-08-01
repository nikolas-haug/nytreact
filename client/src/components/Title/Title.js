import React from "react";
import "./Title.css";

const Title = (props) => (
    <div className="jumbotron text-center py-2">
        <h1>{props.title}</h1>
        <hr />
        <p>seach for and archive your NYT articles here</p>
    </div>
)

export default Title;