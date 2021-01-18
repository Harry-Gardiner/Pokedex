import React, { useState } from 'react';
import { capitalize, addId } from '../../functions/functions';

const PokemonList = ({ data }) => {
    // set state to increment pokemon displayed
    const [listCount, setListCount] = useState(0);
    // pass data objedt (list of pokemon) through function to add an Id to each pokemon, later used to get specific pokemon sprite
    addId(data);
    // set empty array to capture list of pokemon to be displayed
    const PokemonList = [];

    // loop through list count and push pokemon to Pokemonlist to be displayed
    for (let i = listCount; i < listCount + (listCount === 140 ? 11 : 20); i += 1) {
        PokemonList.push(data[i]);
    };

    // next list of pokemon
    const gotoNextPage = () => {
        setListCount(listCount + 20);
    };

    // previous list of pokemon
    const gotoPrevPage = () => {
        setListCount(listCount - 20);
    };

    return (
        <>
            <h2>Pokemon List</h2>
            <div className="btnContainer">
                <button
                    onClick={gotoPrevPage}
                    disabled={listCount === 0 ? true : false}
                >
                    Previous
                </button>
                <button
                    onClick={gotoNextPage}
                    disabled={listCount === 140 ? true : false}
                >
                    Next
                </button>
            </div>
            <div className="listContainer">
                {PokemonList.map((pokemon) => (
                    <div
                        key={pokemon.name}
                        className="list-card"
                    >
                        <p className="topL">{pokemon.id}</p>
                        {/* list starts at 0, whereas images start at 1, therefore index + 1 = correct pokemon Image */}
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={`sprite of ${pokemon.name}`} />
                        <p>{capitalize(pokemon.name)}</p>
                    </div>
                ))}
            </div>
        </>
    )
};

export default PokemonList;