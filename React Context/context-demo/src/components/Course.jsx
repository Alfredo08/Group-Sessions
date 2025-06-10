import { useContext } from "react";
import Mentor from "./Mentor";
import AppContext from "../AppContext";

const Course = (props) => {
    const context = useContext(AppContext);
    const course = context.courses.find((course) => course.id === props.courseId);

    return(
        <>
            <h2> Course </h2>
            <ul>
                <li> {course.name} </li>
                <li> {course.programmingLanguages} </li>
            </ul>
            <div>
                {course.mentors.map((mentorId, index) => {
                    return( <Mentor mentorId={mentorId}
                                    key={index} /> )
                })}
            </div>
        </>
    );
}

export default Course;