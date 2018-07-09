import React from 'react';
import classes from './Person.css';


const Person = (props) => {

  return (
    <div className= {classes.Person}>
      <p onClick={props.click}>I'm {props.name || 'a Person'} and I am {Math.floor(Math.random() * 30)} years old and {props.children || 'bla.'}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default Person;