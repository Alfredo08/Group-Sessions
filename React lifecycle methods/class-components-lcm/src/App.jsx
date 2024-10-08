import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: "Alex",
      lastName: "Miller",
      age: 25,
      course: "Full stack immersion"
    }
  }

  componentDidMount(){
    console.log("Step 3 - componentDidMount()");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("ComponentDidUpdate()");
    console.log(prevState);
  }
  /*
  shouldComponentUpdate(nextProps, nextState){
    console.log(nextState, this.state)
    if(nextState.age - 1 === this.state.age){
      return true;
    }
  }
  */

  updateStateByOne = () => {
    this.setState({age: this.state.age + 1})
  }

  render(){
    console.log(this.state)
    console.log("Step 2 - render()");
    return(
      <>
        <h1> Class components lifecycle methods </h1>

        <nav>
          <Link to="/welcome"> Welcome </Link> -
          <Link to="/home"> Home </Link>
        </nav>

        <h2> {this.state.firstName} {this.state.lastName} - {this.state.age} </h2>

        <div>
          <button onClick={this.updateStateByOne}>
            Update age by 1
          </button>
        </div>

        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </>
    )
  }
}

export default App;
