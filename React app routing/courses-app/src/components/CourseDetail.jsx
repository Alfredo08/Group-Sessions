import { useParams } from "react-router-dom";
import Course from "./Course";

const CourseDetail = ({listOfCourses}) => {
    const params = useParams()
    
    const courseId = Number(params.courseId);

    const currentCourse = listOfCourses.find((course) => course.id === courseId);   
    return(
        <>
            {currentCourse !== undefined ? 
                <Course id={currentCourse.id}
                        name={currentCourse.name}
                        time={currentCourse.time}
                        prerequisite={currentCourse.prerequisite} /> : 
                <div>
                    This course doesn't exists: ${courseId}
                </div>
            }
        </>
    );
}

export default CourseDetail;