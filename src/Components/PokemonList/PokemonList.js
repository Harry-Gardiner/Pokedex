import { capitalize } from '../../functions/functions';

const PokemonList = ({ data }) => {
    return (
        <div>
            {data.map((pokemon, index) => (
                <div key={pokemon.name}>
                    {/* list starts at 0, whereas images start at 1, therefore index + 1 = correct pokemon Image */}
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={`sprite of ${pokemon.name}`} />
                    <p>{capitalize(pokemon.name)}</p>
                </div>
            ))}
        </div>
    )
};

export default PokemonList;