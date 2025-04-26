import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PokemonDetail from '../components/PokemonDetail';
import { getPokemonDetail } from '../service/PokeAPI.ts';
import { PokemonDetail as PokemonDetailType } from '../type/pokemon.ts';

const PokemonPage = () => {
  //we use the hook useParams to get the id
  const { id } = useParams<{ id: string }>();

  //then the hook useState to declare pokemon to either a PokemonDetailType or null
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);

  //we also set loading to true used for later
  const [loading, setLoading] = useState(true);

  //and the error to either string or null
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      //now this is where we use what we declared to actually fetch the pokemon details
      if (!id) return; 
      
      try {
        //we try getting the pokemon details
        setLoading(true);
        const data = await getPokemonDetail(id);
        setPokemon(data);
      } catch (err) {
        //otherwise we return an error
        setError('Failed to fetch Pokémon details :( Maybe later?');
        console.error(err);
      } finally {
        //and we set the loading to done
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [id]);

  return (
    //first we have the back button
    <Layout>
      <div className="mb-4"> 
        <Link to="/pokedex" className="flex items-center text-red-600 ">
        ← Back to Pokédex
        </Link>
      </div>
      
      {loading ? (
        //then this is the loading
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Loading Pokémon details...</p>
        </div>
      ) : error ? (
        //showing the error in case of one
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p>{error}</p>
        </div>
      ) : pokemon ? (
        //and then displaying the pokemon details :3
        <PokemonDetail pokemon={pokemon} />
      ) : (//last but not least if the pokemon cannot be found
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
          <p>Pokémon not found.</p>
        </div>
      )}
    </Layout>
  );
};

export default PokemonPage;