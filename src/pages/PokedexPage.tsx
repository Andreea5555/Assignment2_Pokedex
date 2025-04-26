import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';
import { getPokemonList } from '../service/PokeAPI.ts';
import { PokemonBasic } from '../type/pokemon.ts';
import '../pokedexPage.css';

const PokedexPage = () => {

  //we declare again all the things we are going to use for their initial state
  const [pokemonList, setPokemonList] = useState<PokemonBasic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchPokemon = async () => {
      //we try to fetch the Pokemon data
      try {
        setLoading(true);
        //first we set the load to true
        const offset = currentPage * itemsPerPage; //this is how much we skip

        const data = await getPokemonList(itemsPerPage, offset); //and this is the data we get

        setPokemonList(data.results); //then we set the pokemon list to the pokemon list we require for the page we are on

        setTotalPages(Math.ceil(data.count / itemsPerPage));// then the total pages are the high approx of how much data we have divided by 20

        //to be honest we could have hard coded it but it wouldn't have been that good 
      } catch (err) {
        setError('Failed to fetch Pokémon data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    //here we just display the pokemons/loading/errors, we have a special way we show the pokemons (reference to PokemonCard component) but that is another component
    <Layout>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Loading Pokémon...</p>
        </div>
      ) : error ? (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>{error}</p>
        </div>
      ) : (//we also display the pagination finally
        <> 
          <div className='pokemon-grid'>
            {pokemonList.map((pokemon) => (
              <PokemonCard  key={pokemon.name} pokemon={pokemon}/>
            ))}
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Layout>
  );
};

export default PokedexPage;