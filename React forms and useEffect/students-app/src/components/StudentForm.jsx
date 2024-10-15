import { useState } from "react";

const StudentForm = ({addStudent}) => {
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [newCourse, setNewCourse] = useState("");
    const [newID, setNewID] = useState(0);

    const submitNewStudent = (event) => {
        event.preventDefault();
        
        const newStudent = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
            course: newCourse,
            id: newID
        }

        addStudent(newStudent);

        setNewFirstName("");
        setNewLastName("");
        setNewAge(0);
        setNewCourse("");
        setNewID(0);
    }

    return (
        <>
            <h2> Add new student </h2>
            <form onSubmit={submitNewStudent}>
                <div>
                    <label htmlFor="newFirstName">First name: </label>
                    <input type="text"
                           id="newFirstName"
                           value={newFirstName} 
                           onChange={(e) => setNewFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="newLastName">Last name: </label>
                    <input type="text"
                           id="newLastName"
                           value={newLastName} 
                           onChange={(e) => setNewLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="newAge">Age: </label>
                    <input type="number"
                           id="newAge"
                           value={newAge} 
                           onChange={(e) => setNewAge(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="newCourse">Course: </label>
                    <input type="text"
                           id="newCourse"
                           value={newCourse} 
                           onChange={(e) => setNewCourse(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="newID">ID: </label>
                    <input type="number"
                           id="newID"
                           value={newID} 
                           onChange={(e) => setNewID(e.target.value)}/>
                </div>
                <button> Add student </button>
            </form>
        </>
    );
}

export default StudentForm;