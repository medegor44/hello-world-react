import React, { useEffect, useState } from "react";

function useApiRequest(initialUrl) {
    const [url, setUrl] = useState(initialUrl);
    const [succeed, setSucceed] = useState(false);

    useEffect(() => {
        fetch(url)
        .then(r => {
            if (r.status === 200)
                setSucceed(true);
            else
                setSucceed(false);
        })
    }, [url]);

    return [succeed, setUrl];
}

function RequestButton(props) {
    const [succeed, setUrl] = useApiRequest("ya.ru");
    const [currentUrl, setCurrentUrl] = useState("ya.ru")

    return (
        <div>
            <h1>
                {succeed ? "Yes" : "No"}
            </h1>
            <input value={currentUrl} onChange={e => setCurrentUrl(e.target.value)}></input>
            <button onClick={() => setUrl(currentUrl)}>
                Send reuest
            </button>
        </div>
    );
}

export { RequestButton };