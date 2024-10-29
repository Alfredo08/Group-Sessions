import { Link } from "react-router-dom";

const Course = ({name, id, prerequisite, time}) => {
    return (
        <>
            <Link to={`/course-detail/${id}`}>
                <h3> {id} - {name} </h3>
            </Link>
            <p> Time: {time} </p>
            <p> Prerequisite: {prerequisite} </p>
        </>
    );
}

export default Course;