import React from 'react';

const FrontPage = (props) => (
  <div>
    <h1>Hi, This is a new React App</h1>
    <button
      className={props.btnClass}
      onClick={props.clicked}>Toggle Persons</button>
  </div>
);


export default FrontPage;