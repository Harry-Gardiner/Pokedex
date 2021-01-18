import React, { useState } from 'react';
import { capitalize } from '../../functions/functions';

const PokemonList = ({ data }) => {
    const [listCount, setListCount] = useState(0);

    const PokemonList = [];

    // Add +5 
    for (let i = listCount; i < listCount + (listCount === 140 ? 11 : 20); i += 1) {
        PokemonList.push(data[i]);
    };

    const gotoNextPage = () => {
        console.log("next");
        setListCount(listCount + 20)
    };

    const gotoPrevPage = () => {
        console.log("prev");
        setListCount(listCount - 20)
    };

    return (
        <>
            <h2>Pokemon List</h2>
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
            <div className="listContainer">
                {PokemonList.map((pokemon, index) => (
                    <div
                        key={pokemon.name}
                        className="list-card"
                    >
                        <p className="topL">{index + 1}</p>
                        {/* list starts at 0, whereas images start at 1, therefore index + 1 = correct pokemon Image */}
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={`sprite of ${pokemon.name}`} />
                        <p>{capitalize(pokemon.name)}</p>
                    </div>
                ))}
            </div>
        </>
    )
};

export default PokemonList;