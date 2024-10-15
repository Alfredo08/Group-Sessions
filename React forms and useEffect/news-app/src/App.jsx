import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import New from './components/New';

const App = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    // You need an api key to run this app, you can get it from here https://newsapi.org/
    const URL = "https://newsapi.org/v2/everything?q=nfl&apiKey=DROP_YOUR_API_KEY_HERE";
    axios.get(URL)
      .then((responseJSON) => {
        console.log(responseJSON.data);
        setNews(responseJSON.data.articles);
      })
      .catch((error) => {
        console.log("Something went wrong: " + error);
      });
  }, []);

  useEffect(() => {
    console.log("News just got updated in the state");
  }, [news]);

  return (
    <>
      <h1> News app </h1>
      {news.map((newInfo, index) => {
        return(<New newInfo={newInfo}
                    key={index}/>)
      })}
    </>
  );
}

export default App
