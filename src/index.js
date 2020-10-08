import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
    return (
        <h1>Hello world!</h1>
    );
}

const mountNode = document.getElementById("app");
ReactDOM.render(
    <HelloWorld></HelloWorld>,
    mountNode
);