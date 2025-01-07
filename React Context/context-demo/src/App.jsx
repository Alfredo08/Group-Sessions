import { useState } from 'react';
import './App.css';
import Student from './components/Student';
import AppContext from './AppContext';

const App = () => {

  const defaultStudent = {
    firstName: "Alex",
    lastName: "Miller",
    age: 25,
    courses: ["WF-001", "PY-001"]
  }

  const defaultCourses = [{
    name: "Web fundamentals",
    programmingLanguages: ["HTML", "CSS", "JavaScript"],
    id: "WF-001",
    mentors: [123, 456]
  },
  {
    name: "Python for web developers",
    programmingLanguages: ["Python", "Django"],
    id: "PY-001",
    mentors: [123, 789]
  }];

  const defaultMentors = [{
      fullName: "Alfredo Salazar",
      yearsOfExperience: 15,
      id: 123
    },
    {
      fullName: "Martha Smith",
      yearsOfExperience: 12,
      id: 456
    },
    {
      fullName: "Roger Anderson",
      yearsOfExperience: 25,
      id: 789
    }];

  const [studentInfo, setStudentInfo] = useState(defaultStudent);
  const [listOfCourses, setListOfCourses] = useState(defaultCourses);
  const [listOfMentors, setListOfMentors] = useState(defaultMentors);

  const contextValues = {
    student: studentInfo,
    courses: listOfCourses,
    mentors: listOfMentors
  }

  return (
    <>
      <h1>React context demo </h1>
      <AppContext.Provider value={contextValues}>
        <Student />
      </AppContext.Provider>
    </>
  );
}

export default App;