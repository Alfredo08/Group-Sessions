import { useContext } from "react";
import Mentor from "./Mentor";
import AppContext from "../AppContext";

const Course = ({courseId}) => {
    const context = useContext(AppContext);
    const course = context.courses.find((course) => course.id === courseId);
    return (
        <>
            <h3> Course </h3>
            <ul>
                <li>
                    Name: {course.name}
                </li>
                <li>
                    Programming Languages: {course.programmingLanguages}
                </li>
            </ul>
            <div>
                {course.mentors.map((mentorId, index) => {
                    return(
                        <Mentor key={index}
                                mentorId={mentorId}/>
                    )
                })}
            </div>
        </>
    );
}

export default Course;