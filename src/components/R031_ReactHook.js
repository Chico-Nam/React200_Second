import React, { useEffect, useState } from "react";

function R031_ReactHook(props) {
    const [content , setContents] = useState('[THIS IS REACT]');

    useEffect(() => {
        console.log('useEffect : ' + content);
    });

    return (
        <div style={{padding : "0px"}}>
            <h2>{content}</h2>
            <button onClick={() => setContents('[THIS IS HOOK]')}>버튼</button>
        </div>
    );
}

export default R031_ReactHook;