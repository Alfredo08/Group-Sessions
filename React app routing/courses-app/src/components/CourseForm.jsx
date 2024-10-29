import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseForm = ({addCourse}) => {
    const defaultValues = {
        name: "",
        id: 0,
        prerequisite: "",
        time: ""
    };

    const [newCourse, setNewCourse] = useState(defaultValues);
    const [errorMessage, setErrorMessage] = useState("");

    const navigation = useNavigate();

    const updateField = (target) => {
        setNewCourse({
            ...newCourse,
            [target.name] : target.value
        });
    }

    const handleNewCourse = (event) => {
        event.preventDefault();
        if(newCourse.name === ""){
            setErrorMessage("Please provide the name of the new course!");
        }
        else{
            addCourse(newCourse)
            setNewCourse(defaultValues);
            setErrorMessage("");
            navigation('/courses');
        }
    }

    return(
        <>
            <h2> New course </h2>
            <form onSubmit={(e) => handleNewCourse(e)}>
                <div>
                    <label htmlFor="name">
                        Name: 
                    </label>
                    <input type="text"
                           id="name"
                           name="name"
                           value={newCourse.name} 
                           onChange={(e) => updateField(e.target)}/>
                </div>
                <div>
                    <label htmlFor="id">
                        Id: 
                    </label>
                    <input type="number"
                           id="id"
                           name="id"
                           value={newCourse.id} 
                           onChange={(e) => updateField(e.target)}/>
                </div>
                <div>
                    <label htmlFor="prerequisite">
                        Prerequisite: 
                    </label>
                    <input type="text"
                           id="prerequisite"
                           name="prerequisite"
                           value={newCourse.prerequisite} 
                           onChange={(e) => updateField(e.target)}/>
                </div>
                <div>
                    <label htmlFor="time">
                        Time: 
                    </label>
                    <input type="text"
                           id="time"
                           name="time"
                           value={newCourse.time} 
                           onChange={(e) => updateField(e.target)}/>
                </div>
                <button>
                    Add
                </button>
                <div className="errors">
                    {errorMessage}
                </div>
            </form>
        </>
    );
}

export default CourseForm;