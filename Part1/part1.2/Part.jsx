import React from "react";
const Part = (props) => {
    return (
        <p>
            {props.part.part} {props.part.exercise}
        </p>
    )
}
export default Part;