import { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import ListPets from './components/ListPets';
import axios from 'axios';
import './App.css';
import NewPet from './components/NewPet';

const App = () => {
  const [pets, setPets] = useState([]);
  const [baseURL, setBaseURL] = useState("http://localhost:8080")

  const deletePet = (id) => {
    let newPetsArray = pets.filter((pet) => pet.id != id);
    setPets(newPetsArray);
  }

  useEffect(() => {
    axios.get(baseURL + "/pets")
      .then(response => {
        setPets(response.data);
      })
      .catch(error => {
        console.log("An error happened with this request", error);
      }) 
  }, []);

  return (
    <>
      <h1> Pets client </h1>
      <Link to="/all_pets"> List of pets </Link> -
      <Link to="/new_pet"> New pet </Link>
      <Routes>
        <Route path="/all_pets" element={<ListPets 
              pets={pets}
              baseURL={baseURL}
              deletePet={deletePet}/>} />
        <Route path="/new_pet" element={<NewPet 
              setPets={setPets} 
              baseURL={baseURL}
              pets={pets}/>} />
      </Routes>
    </>
  );
}

export default App;
