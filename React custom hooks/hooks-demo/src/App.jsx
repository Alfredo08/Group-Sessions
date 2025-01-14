import { useState } from 'react';
import './App.css'
import useCounter from './hooks/useCounter';
import useFetchImage from './hooks/useFetchImage';

const App = () => {
  const [countByTwo, addToCounterTwo, subToCounterTwo] = useCounter(0, 2, 2);
  const [countByFive, addToCounterFive, subToCounterFive] = useCounter(0, 5, 5);
  const [dogImage, fetchDogImage] = useFetchImage("https://dog.ceo/api/breeds/image/random", "DOG");
  const [catImage, fetchCatImage] = useFetchImage("https://api.thecatapi.com/v1/images/search", "CAT");

  return(
    <>
      <div>
        <h2> Counter 2: {countByTwo} </h2>
        <button onClick={addToCounterTwo}>
          Add
        </button>
        <button onClick={subToCounterTwo}>
          Subtract
        </button>
      </div>
      <div>
        <h2> Counter 5: {countByFive} </h2>
        <button onClick={addToCounterFive}>
          Add
        </button>
        <button onClick={subToCounterFive}>
          Subtract
        </button>
      </div>
      <div>
        <button onClick={fetchDogImage}>
          Get random dog image
        </button>
        <img src={dogImage} alt="A dog image"/>
      </div>
      <div>
        <button onClick={fetchCatImage}>
          Get random cat image
        </button>
        <img src={catImage} alt="A cat image"/>
      </div>
    </>
  )
}

export default App
