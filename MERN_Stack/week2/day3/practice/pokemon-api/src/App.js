import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
 
        return response.json()
      })
      .then(response => {

        setPokemon(response.results)
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
