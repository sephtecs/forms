import React, { useState } from 'react';
import Form from './components/userForm';
import Results from './components/results';
import './App.css';

function App() {
  const [ state, setState ] =  useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  return (
    <div className="App">
      <Form inputField={state} setInputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App;