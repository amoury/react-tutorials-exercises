import React from 'react';
import Person from '../Person/Person';

const PersonList = (props) => (
  props.persons.map((person, index) => {
    return <Person
      click={() => props.clicked(index)}
      key={index}
      name={person}
      changed={(event) => props.changed(event, index)}
    />
  })
);

export default PersonList;