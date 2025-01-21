import React from "react";

const Student = (props) => {
    return(
        <>
            <h2> Name: {props.firstName} {props.lastName} </h2>
            <p> Age: {props.age}</p>
        </>
    );
}
    

export default Student;
