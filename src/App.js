import React, { Component } from 'react';
import classes from './App.css';


import PersonList from './components/PersonList/PersonList';
import FrontPage from './components/FrontPage/FrontPage';

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
          <PersonList
            persons = {this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );

      btnClass = classes.red;
    }

    return (
      <div className={classes.App}>
        <FrontPage btnClass={btnClass} clicked={this.togglePersonsHandler} />
          { persons }
        </div>
    );
  }
}

export default App;
