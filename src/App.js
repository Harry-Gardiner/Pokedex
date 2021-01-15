import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // List of pokemon - initially empty arr
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemon, setPokemon] = useState("20"); // can be either number or name(lowercase)

  const getPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {
      console.log(response.data);
    });
  };

  const getPokemonList = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
      setPokemonData(response.data.results);
    });
  };

  // Runs once on render
  useEffect(() => {
    //Get list of pokemon
    getPokemonList()

    // Get single pokemon
    getPokemon();
  }, []);


  return (
    <>
      <h1>Pokemon!</h1>
      <ul>
        {pokemonData.map(pokemon => (
          <p
            key={pokemon.name}
          >
            {pokemon.name}
          </p>
        ))}
      </ul>
    </>
  );
}

export default App;
