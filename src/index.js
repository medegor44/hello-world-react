import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function HelloWorld(props) {
    return (
        <h1>Hello {props.name}!</h1>
    );
}

const mountNode = document.getElementById("app");
ReactDOM.render(
    <HelloWorld name="medegor44"></HelloWorld>,
    mountNode
);