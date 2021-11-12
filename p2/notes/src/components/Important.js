import React from "react";

const Important = ({button, setButton}) => {
    
    const toggle = () => {
        setButton(!button);
    }
    return (
        <div>
            <button onClick={() => toggle()}>{button ? "Show ALL" : "Show IMPORTANT"}</button>
        </div>
    )
}
export default Important