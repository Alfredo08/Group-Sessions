import { useEffect, useState } from 'react'
import './App.css'

const App = () =>  {

  const [firstName, setFirstName] = useState("Alex");
  const [lastName, setlastName] = useState("Miller");
  const [age, setAge] = useState(25);

  useEffect(() => {
    console.log("Step 2 - useEffect only triggered once");
  }, []); // Empty square brackets only trigger the effect once after the initial load

  useEffect(() => {
    console.log("Age updated");
  }, [age]) // Triggers every single time the 'age' variable in the state gets updated

  console.log("Step 1 - state loads and then renders the html");
  return (
    <>
      <h1> Lifecycle methods in functional components </h1>
      <h2> {firstName} {lastName} </h2>
      <button onClick={() => setAge(age + 1)}> Update age + 1 </button>
    </>
  )
}

export default App
