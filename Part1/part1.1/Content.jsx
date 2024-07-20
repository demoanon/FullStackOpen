import React from "react";

const Content = (props) => {
    return (
        <div>
            {props.parts.map((part, index) => (
                <div key={index}>
                    <p>{part.part} {part.exercises}</p>
                </div>
            ))}
        </div>
    );
};

export default Content;