import Course from './Course';

const ListOfCourses = ({listOfCourses}) => {
    return(
        <>
            <h2> List of courses </h2>
            {listOfCourses.map((course) => {
                return(<Course key={course.id}
                            id={course.id}
                            time={course.time}
                            name={course.name}
                            prerequisite={course.prerequisite}/>);
            })}
        </>
    );
}

export default ListOfCourses;