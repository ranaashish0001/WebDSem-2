import React, { useEffect, useState } from "react";

function UseEffectExample() {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/krishnabarnwal")
            .then(response => response.json())
            .then(data => setApiData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <h1 style={{ color: "red" }}>API Data</h1>

            <p>
                The useEffect hook is used to perform side effects in functional components.
            </p>

            {apiData ? (
                <div>
                    <h2 style={{ color: "blue" }}>{apiData.name}</h2>
                    <img src={apiData.avatar_url} alt="profile" width="150" />
                    <p>Followers: {apiData.followers}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default UseEffectExample;