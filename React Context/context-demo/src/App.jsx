import { useState } from 'react';
import './App.css';
import Student from './components/Student';
import AppContext from './AppContext';

const App = ()  => {
  const defaultStudent = {
    firstName: "Alex",
    lastName: "Miller",
    age: 25,
    courses: ["WF-001", "PY-001"]
  }

  const defaultCourses = [
    {
      name: "Web Fundamentals",
      programmingLanguages: ["HTML", "CSS", "JavaScript"],
      id: "WF-001",
      mentors: [123, 456]
    },
    {
      name: "Python for web developers",
      programmingLanguages: ["Python", "Django", "SQL"],
      id: "PY-001",
      mentors: [123, 789]
    }
  ];

  const defaultMentors = [
    {
      id: 123,
      fullName: "Alfredo Salazar",
      yearsOfExperience: 15
    },
    {
      id: 456,
      fullName: "Martha Smith",
      yearsOfExperience: 12
    },
    {
      id: 789,
      fullName: "Roger Anderson",
      yearsOfExperience: 25
    }
  ];

  const [studentInfo, setStudentInfo] = useState(defaultStudent);
  const [listOfCourses, setListOfCourses] = useState(defaultCourses);
  const [listOfMentors, setListOfMentors] = useState(defaultMentors);

  const contextValues = {
    student: studentInfo,
    courses: listOfCourses,
    metnors: listOfMentors
  }; 

  return (
    <>
      <h1> Context demo </h1>
      <AppContext.Provider value={contextValues}>
        <Student/>
      </AppContext.Provider>
    </>
  );
}

export default App;
