import { useState } from 'react'
import courses from './mock-data';
import './App.css'
import CourseForm from './components/CourseForm';
import { Routes, Route, Link } from 'react-router-dom';
import ListOfCourses from './components/ListOfCourses';
import CourseDetail from './components/CourseDetail';

const App = () => {
  const [listOfCourses, setListOfCourses] = useState(courses);

  const addCourse = (newCourse) => {
    setListOfCourses([...listOfCourses, newCourse]);
  }

  return (
    <>
      <h1> React app routing - courses app </h1>
      <Link to="/new-course"> Add a course </Link> -
      <Link to="/courses"> List of all courses </Link>

      <Routes>
        <Route path="/new-course" element={<CourseForm addCourse={addCourse}/>} />
        <Route path="/courses" element={<ListOfCourses listOfCourses={listOfCourses}/>}/>
        <Route path="/course-detail/:courseId" element={<CourseDetail listOfCourses={listOfCourses}/>} />
      </Routes>
    </>
  );
}

export default App
