const PokemonCard = ({ Pokemon }) => { // Pokemon is an object of data
    console.log(Pokemon);

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    };
    const name = capitalize(Pokemon.name);
    const height = Pokemon.height / 10;
    const type = capitalize(Pokemon.types[0].type.name);
    const sprite = Pokemon.sprites.front_default;
    const weight = (Pokemon.weight / 10).toFixed(0);

    return (
        <div>
            <img src={sprite} alt={`Sprite of ${name}`} />
            <div>
                <p>Name:</p>
                <p>{name}</p>
                <p>Id:</p>
                <p>{Pokemon.id}</p>
            </div>
            <div>
                <p>Weight:</p>
                <p>{weight}kg</p>
            </div>
            <div>
                <p>Height:</p>
                <p>{height}m</p>
            </div>
            <div>
                <p>Type:</p>
                <p>{type}</p>
            </div>
        </div>
    )
};

export default PokemonCard;

