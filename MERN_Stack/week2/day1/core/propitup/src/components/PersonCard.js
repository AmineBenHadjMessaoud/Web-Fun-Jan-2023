import React from "react";

function PersonCard  (props) {
    return (
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <h6>Age: {props.age}</h6>
            <h6>Hair color: {props.color}</h6>
        </div>
    )
}
export default PersonCard;