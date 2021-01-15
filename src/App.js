import React, { useState, useEffect } from 'react';

import axios from 'axios';

function App() {
  // List of pokemon - initially empty arr
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
      setPokemonData(response.data.results);
    })
  }, [])

  // display list of pokemon
  console.log(pokemonData);


  return (
    <>
      <h1>Pokemon!</h1>

    </>
  );
}

export default App;
