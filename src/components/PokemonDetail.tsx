import { PokemonDetail as PokemonDetailType } from '../type/pokemon.ts';
  

interface PokemonDetailProps {
  pokemon: PokemonDetailType;
}

const PokemonDetail = ({ pokemon }: PokemonDetailProps) => {
  //in this component we just extract the info about the pokemons and display it (the weight and the height are the cutest)
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
            alt={pokemon.name}
            className="w-64 h-64 object-contain"
          />
          <h1 className="text-3xl font-bold capitalize mt-4">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex gap-2 mt-2">
            {pokemon.types.map((typeInfo) => (
              <span 
                key={typeInfo.type.name}
                className="px-3 py-1 rounded text-white text-sm capitalize"
                style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-100 p-2 rounded">
                <span className="font-medium">Height:</span> {pokemon.height / 10} m
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <span className="font-medium">Weight:</span> {pokemon.weight / 10} kg
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Base Stats</h2>
            {pokemon.stats.map((statInfo) => (
              <div key={statInfo.stat.name} className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="capitalize font-medium">{statInfo.stat.name.replace('-', ' ')}</span>
                  <span>{statInfo.base_stat}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${Math.min(100, (statInfo.base_stat / 255) * 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//we were thinking about finding a way to not implement this twice cause it's also 
// implemented in PokemonCard but we dropped the idea
const getTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };

  return typeColors[type] || '#777777';
};

export default PokemonDetail;