import React, { useState } from "react";

const SearchPokemon = ({ getPokemon }) => {
    const [value, setValue] = useState("") // set initial value of search input

    const handleChange = (e) => {
        setValue(e.currentTarget.value.toLowerCase());
        // value needs to be lowercase to match API format
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label> Enter Pokemon Name or ID </label>
            <input
                type="text"
                onChange={handleChange}
                value={value}
                placeholder="Pikachu / 25"
            />
        </form>
    )
};

export default SearchPokemon;