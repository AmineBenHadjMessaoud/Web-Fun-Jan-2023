import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import NinjaForm from './components/NinjaForm';
import NinjaDisplay from './components/NinjaDisplay';

function App() {

  const [ boxColorArray, setBoxColorArray ] = useState([]);


  const [ ninjaBoxArray, setNinjaBoxArray ] = useState([])

  return (
    <div className="App">
      <h1>Standard Assignment</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
      <hr />
      <h1>Ninja Assignment</h1>
      <NinjaForm ninjaBoxArray={ ninjaBoxArray } setNinjaBoxArray={ setNinjaBoxArray } />
      <NinjaDisplay ninjaBoxArray={ ninjaBoxArray } />
      
    </div>
  );
}
export default App;