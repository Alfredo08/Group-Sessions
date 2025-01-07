import { useContext } from "react";
import Course from "./Course";
import AppContext from "../AppContext";

const Student = () => {
    const context = useContext(AppContext);

    return(
        <>
            <h2> Student Info </h2>
            <ul>
                <li>
                    First name: {context.student.firstName}
                </li>
                <li>
                    Last name: {context.student.lastName}
                </li>
                <li>
                    Age: {context.student.age}
                </li>
            </ul>
            <div>
                {context.student.courses.map((courseId, index) => {
                    return (
                        <Course key={index}
                                courseId={courseId}/>
                    )
                })}
            </div>
        </>
    );
}

export default Student;