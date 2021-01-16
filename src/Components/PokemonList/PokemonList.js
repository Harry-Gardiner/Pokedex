import { capitalize } from '../../functions/functions';

const PokemonList = ({ data }) => {
    return (
        <>
            <h2>Pokemon List</h2>
            <div className="listContainer">
                {data.map((pokemon, index) => (
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