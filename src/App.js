import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchPokemon from './Components/Search/SearchPokemon';
import PokemonCard from './Components/PokemonCard/PokemonCard';
import PokemonList from './Components/PokemonList/PokemonList';

function App() {
  // List of Pokemon - initially empty arr
  const [pokemonData, setPokemonData] = useState([]);
  // Single Pokemon data - initial empty obj
  const [Pokemon, setPokemon] = useState({}); // can be either number or name(lowercase)

  // Check if Pokemon object is empty
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  // Get a searched for pokemon
  const getPokemon = (nameOrId) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`).then(response => {
      setPokemon(response.data);
      console.log(response.data);
    });
  };

  // Get list of pokemon
  const getPokemonList = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
      setPokemonData(response.data.results);
    });
  };

  // Runs once on render
  useEffect(() => {
    getPokemonList()
  }, []);

  console.log(pokemonData);

  return (
    <>
      <h1>Pokemon!</h1>
      <SearchPokemon
        getPokemon={getPokemon}
      />
      {/* Check to see if a pokemon has been searched for */}
      {
        isEmpty(Pokemon) ? null : <PokemonCard Pokemon={Pokemon} />
      }
      <PokemonList
        data={pokemonData}
        getPokemon={getPokemon}
      />
    </>
  );
}

export default App;
