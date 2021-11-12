import React from "react";

const Part = ({coursePart}) => {
    return (
        <>
            <p>{coursePart.name} {coursePart.exercises}</p>
        </>
    )
}

export default Part 