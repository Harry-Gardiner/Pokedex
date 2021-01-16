import Type from '../PokemonType/Type';

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
        <div className="card">
            <img className="card-img" src={sprite} alt={`Sprite of ${name}`} />
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name:</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th>Id:</th>
                            <td>{Pokemon.id}</td>
                        </tr>
                        <tr>
                            <th>Height</th>
                            <td>{height}m</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td>{weight}kg</td>
                        </tr>
                    </tbody>
                </table>
                <Type
                    type={type}
                />
            </div>
        </div>
    )
};

export default PokemonCard;

