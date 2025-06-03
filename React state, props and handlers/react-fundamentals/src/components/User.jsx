/*
    props = {
        firstName: ""
        lastName: ""
        age: 
    }
*/
const User = (props) => {
    return(
        <>
            <p> Full name: {props.firstName} {props.lastName} </p>
            <p> Age: {props.age} </p>
        </>
    );
}

export default User;