import React, { useState, useEffect } from 'react';
import axios from './data/axios-config';
import SearchPokemon from './Components/Search/SearchPokemon';
import PokemonCard from './Components/PokemonCard/PokemonCard';
import PokemonList from './Components/PokemonList/PokemonList';

function App() {
  // List of Pokemon - initially empty arr
  const [pokemonData, setPokemonData] = useState([]);
  // Single Pokemon data - initial empty obj
  const [Pokemon, setPokemon] = useState({}); // can be either number or name(lowercase)
  // set Loading state
  const [Loading, setLoading] = useState(true);


  // Check if Pokemon object is empty
  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  // Get a searched for pokemon
  const getPokemon = (nameOrId) => {
    axios.get(`${nameOrId}`).then(response => {
      setPokemon(response.data);
    }, error => {   // error message
      console.error(`Pokemon ${nameOrId} not found`);
      alert(`Pokemon ${nameOrId} not found, check spelling`)
    });
  };

  // Get list of pokemon
  const getPokemonList = () => {
    axios.get("?limit=151").then(response => {
      setPokemonData(response.data.results);
      console.log(response.data.results);
      setLoading(false)
    }, error => {   // error message
      alert("Unable to access database");
    });
  };

  // Runs once on render
  useEffect(() => {
    getPokemonList()
  }, []);



  // Render
  return (
    <>
      <h1>Pokedex!</h1>
      <SearchPokemon
        getPokemon={getPokemon}
      />
      {/* Check to see if a pokemon has been searched for */}
      {
        isEmpty(Pokemon) ? null : <PokemonCard Pokemon={Pokemon} />
      }

      {/* Check to see if list has loaded. If not return loading else return list of pokemon from API */}
      { Loading ? <p>Loading....</p> :
        <PokemonList
          data={pokemonData}
          getPokemon={getPokemon}

        />
      }

    </>
  );
}

export default App;
