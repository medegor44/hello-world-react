import React, { useEffect, useState } from "react";

function RequestButton(props) {
    const [buttonState, setState] = useState({
        clicked: false,
        requestSucceed: false
    });

    console.log(`clicked: ${buttonState.clicked}`);

    useEffect(() => {
        if (buttonState.clicked) {
            const headers = new Headers()
            headers.append("Content-Type", "application/json")

            const body = {"message":"Hello world"}

            const options = {
                method: "POST",
                headers,
                mode: "cors",
                body: JSON.stringify(body),
            }

            fetch("https://542ee5d5c48a1812a1411109fe31bfab.m.pipedream.net", options)
            .then(response => {
                if (response.status === 200)
                    setState({
                        clicked: false,
                        requestSucceed: true
                    });
                else
                    setState({
                        clicked: false,
                        requestSucceed: false
                    });
            })
            .catch(err => {
                setState({
                    clicked: false,
                    requestSucceed: false
                });
            })
        }
    });

    console.log(`response: ${buttonState.requestSucceed}`);

    return (
        <button onClick={() => setState({ clicked: true, requestSucceed: buttonState.requestSucceed })}>
            Send request
        </button>
    );
}

export { RequestButton };