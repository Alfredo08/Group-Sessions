import { useState } from 'react';
import './App.css';
import Student from './components/Student';
import StudentForm from './components/StudentForm';

const App = () => {

  const defaultStudents = [{
    firstName: "Alex",
    lastName: "Miller",
    age: 25,
    course: "Fullstack immersion",
    id: 123
  },
  {
    firstName: "Martha",
    lastName: "Smith",
    age: 24,
    course: "Python",
    id: 456
  },
  {
    firstName: "Roger",
    lastName: "Anderson",
    age: 25,
    course: "Java",
    id: 789
  }];

  const [students, setStudents] = useState(defaultStudents);
  
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  }

  return (
    <>
      <h1> Students app </h1>
      <StudentForm addStudent={addStudent}/>
      {students.map((student, index) => {
        return (<Student firstName={student.firstName}
                         lastName={student.lastName}
                         age={student.age}
                         course={student.course}
                         key={index}/>)
      })}
    </>
  );
}

export default App
