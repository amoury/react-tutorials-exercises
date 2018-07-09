import React, { Component } from 'react';
import classes from './App.css';


import Person from './Person/Person';

class App extends Component {
  state = {
    persons: ['Ansar', 'Aman', 'John'],
    showPerson: false
  };

  nameChangedHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons[index] = event.target.value;

    this.setState({ persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  };

  render() {
    let persons = null;
    let btnClass = '';

    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                      click={() => this.deletePersonHandler(index)} 
                      key={index} 
                      name={person} 
                      changed={(event) => this.nameChangedHandler(event, index)}
                    />
          })}
        </div>
      );

      btnClass = classes.red;
    }

    return (
      <div className={classes.App}>
          <h1>Hi, This is a new React App</h1>
          <button
              className = {btnClass} 
              onClick = {this.togglePersonsHandler}>Toggle Persons</button>
          { persons }
        </div>
    );
  }
}

export default App;
