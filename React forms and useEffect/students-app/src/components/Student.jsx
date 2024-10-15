
const Student = ({firstName, lastName, age, course}) => {
    return(
        <>
            <h2> Student: {firstName} {lastName} </h2>
            <p> Age: {age} </p>
            <p> Course: {course} </p>  
        </>
    );
}

export default Student;