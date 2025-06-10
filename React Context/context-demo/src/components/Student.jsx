import Course from "./Course";
import AppContext from "../AppContext";
import { useContext } from "react";

const Student = () => {
    const context = useContext(AppContext);

    return(
        <>
            <h2> Student Info </h2>
            <ul>
                <li> First name: {context.student.firstName} </li>
                <li> Last name: {context.student.lastName} </li>
                <li> Age: {context.student.age} </li>
            </ul>
            {context.student.courses.map((courseId, index) => {
                return( <Course courseId={courseId}
                                key={index}/> )
            })}
        </>
    );
};

export default Student;