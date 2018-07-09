import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: ['Ansar', 'Aman', 'John']
  };

  switchNameHandler = (newName) => {
    this.setState({persons: [newName, 'Aman']});
  }

  nameChangedHandler = (event) => {
    this.setState({ persons: [event.target.value, 'Aman'] })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, This is a new React App</h1>
        <button onClick = {() => this.switchNameHandler('New Amoury')}>Switch Name</button>
        <Person name = {this.state.persons[0]} changed= {this.nameChangedHandler}/>
        <Person name = {this.state.persons[1]} click = {this.switchNameHandler.bind(this, 'Amoury')}>My Hobby is Reading</Person>
        <Person name = {this.state.persons[2]}/>
      </div>
    );
  }
}

export default App;
