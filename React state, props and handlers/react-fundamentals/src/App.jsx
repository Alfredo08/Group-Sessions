import { useState } from 'react';
import './App.css'
import User from './components/User';
import UpdateName from './components/UpdateName';

const App = () => {
  const hobbies = ["Programming in React", "Playing the piano", "Swimming"];
  const users = [{
    firstName: "Alex",
    lastName: "Miller",
    age: 23
  },
  {
    firstName: "Julie",
    lastName: "Winston",
    age: 28
  },
  {
    firstName: "Roger",
    lastName: "Anderson",
    age: 25
  },
  {
    firstName: "Tyler",
    lastName: "Wilson",
    age: 24
  }
];

  const [fullName, setFullName] = useState("Martha Smith");
  const [listOfHobbies, setListOfHobbies] = useState(hobbies);
  const [listOfUsers, setListOfUsers] = useState(users);
  
  const changeToBrianna = () => {
    setFullName("Brianna Putterbaugh");
  }

  const changeToNewName = (event) => {
    setFullName(event.target.value);
  }

  return (
    <>
      <h1> React fundamentals </h1>
      <h2> Welcome back {fullName} </h2>
      <button onClick={changeToBrianna}>
        Change to Brianna Putterbaugh
      </button>
      
      <UpdateName fullName={fullName}
                  changeToNewName={changeToNewName} />

      <h2> List of hobbies </h2>
      <ul>
        {
          listOfHobbies.map((hobby) => {
            return (<li> {hobby} </li>);
          })
        }
      </ul>
      <h2> List of users </h2>
      {
        listOfUsers.map((user) => {
          return (<User firstName={user.firstName}
                        lastName={user.lastName}
                        age={user.age}/>)
        })
      }
      <div> {fullName} </div>
    </>
  );
}

export default App
