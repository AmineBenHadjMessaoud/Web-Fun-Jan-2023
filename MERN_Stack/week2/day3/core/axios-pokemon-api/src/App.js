import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
 
        setPokemon(response.data.results)
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);  
  return (
    <div className="App">
      <ul>
        {pokemon.map((p, index)=>(
          <li key={index}> {p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
