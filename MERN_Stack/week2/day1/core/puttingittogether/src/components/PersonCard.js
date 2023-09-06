import React,{useState} from "react";

function PersonCard  (props) {
    const [age, setAge] = useState(props.age);
    return (
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <h6>Age: {age}</h6>
            <h6>Hair color: {props.color}</h6>
            <button onClick={(event)=>setAge(age+1)}>Birthday Button for {props.lastName} {props.firstName}</button>
        </div>
    )
}
export default PersonCard;