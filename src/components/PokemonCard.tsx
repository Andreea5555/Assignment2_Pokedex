
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PokemonBasic, PokemonDetail } from '../type/pokemon';
import { getPokemonDetail } from '../service/PokeAPI';

interface PokemonCardProps {
  pokemon: PokemonBasic;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [pokemonData, setPokemonData] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        // Extracting the ID from the URL
        const id = pokemon.url.split('/').filter(Boolean).pop();
        if (id) {
          const data = await getPokemonDetail(id);
          setPokemonData(data);
        }
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [pokemon.url]);

  if (loading) {
    return (
      <div className="border rounded p-4 shadow-md flex items-center justify-center h-60">
        <p>Loading...</p>
      </div>
    );
  }

  if (!pokemonData) {
    return (
      <div className="border rounded p-4 shadow-md h-60">
        <p>Error loading Pokémon data</p>
      </div>
    );
  }

  return (
    <Link 
      to={`/pokemon/${pokemonData.id}`} 
      style={{
        //in some places we used style instead of className, or a third one (the .css files) based on what we needed
        // usually we used style if it needed more components, className for the small ones 
        // and .css when we reused the styles
        textDecoration:'none',
        border: '1px solid #e5e7eb',      
        borderRadius: '0.25rem',          
        padding: '1rem',                  
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        display: 'block',                 
        transition: 'box-shadow 0.3s ease', 
      }}
    >
      <div className="flex flex-col items-center">
        <img 
          src={pokemonData.sprites.front_default} 
          alt={pokemonData.name} 
          className="w-32 h-32"
        />
        <h3 className="text-lg font-semibold capitalize mt-2 ">
          #{pokemonData.id} {pokemonData.name}
        </h3>
        <div className="flex gap-2 mt-2">
          {pokemonData.types.map((typeInfo) => (
            <span 
              key={typeInfo.type.name}
              style={{ 
                backgroundColor: getTypeColor(typeInfo.type.name) ,
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                color: 'white',
                fontSize: '0.875rem',
                textTransform: 'capitalize',
              }}
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const getTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    normal: '#527141',
    fire: '#ffa337',
    water: '#6890F0',
    electric: '#e5b524',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#ffc0cb',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#230e57',
    steel: '#9c9c9c',
    fairy: '#EE99AC',
  };

  return typeColors[type] || '#777777';
};

export default PokemonCard;