import { useReducer } from 'react'
import './App.css'
import appReducer from './reducers/appReducer';

const App = () => {
  const reducerInitialState = {
    students: ["Alex Miller", "Martha Smith", "Roger Anderson"],
    counter: 0,
    newStudent: ""
  }

  const [state, dispatch] = useReducer(appReducer, reducerInitialState);
  
  const updateCounter = (value) => {
    dispatch({
      data: value,
      type: "ADD_COUNT"
    });
  }

  const updateNewStudent = (e) => {
    dispatch({
      type: "UPDATE_NEW_STUDENT", 
      data: e.target.value
    });
  }

  const updateStudentList = (e) => {
    e.preventDefault();
    dispatch({
      data: state.newStudent,
      type: "ADD_STUDENT"
    });
    updateNewStudent({target: {value: ""}});
  }
  
  return (
    <>
      <h1> Counter: {state.counter} </h1>
      <button onClick={() => updateCounter(1)}> Add one to count </button>
      <h2> List of students </h2>
      <ul>
      {
        state.students.map((student, index) => {
          return (<li key={index}> {student} </li>)
        })
      }
      </ul>
      <form onSubmit={updateStudentList}>
        <label htmlFor='"newStudent'>
          New student:
        </label>
        <input id="newStudent" onChange={updateNewStudent} value={state.newStudent}/>
        <button>
          Add
        </button>
      </form>
    </>
  )
}

export default App
