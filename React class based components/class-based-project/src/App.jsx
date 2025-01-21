import './App.css'
import React from 'react';
import Student from './components/Student';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: "Alex",
      lastName: "Miller",
      age: 25,
      count: 0,
      news: []
    }
  }

  addOneToCount = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log("We finished updating the count", this.state.count);
    });

    console.log("This will print first!", this.state.count);
  }

  componentDidMount = async () => {
    const settings = {
      method: "GET",
      data: {
        q: "nfl",
        pageSize: 5,
        apiKey: "e993fe0805de4ec0abaff5d967e9302a"
      }
    }
    let URL = "https://newsapi.org/v2/everything?q=nfl&pageSize=5&apiKey=e993fe0805de4ec0abaff5d967e9302a"
    const response = await fetch(URL);
    const data = await response.json();
    this.setState(data.articles);

  }

  render = () => {
    return(
      <>
        <h1> Student information </h1>
        <Student firstName={this.state.firstName}
                 lastName={this.state.lastName}
                 age={this.state.age}/>
        <div>
          Count: {this.state.count}
        </div>
        <div>
          <button onClick={this.addOneToCount}>
            Update count
          </button>
        </div>
      </>
    );
  }
}

export default App
