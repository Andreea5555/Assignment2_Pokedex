
import anxious from 'axios'; //we also use axios for fetching data since it makes it much easier to do so
//(i couldn't resist but call it anxious :))
import { PokemonDetail, PokemonListResponse } from '../type/pokemon';

//first we declare the base url, in our case the pokemon API
const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit = 20, offset = 0): Promise<PokemonListResponse> => {
  //then we create a asynchronious promise that promises to return a GET fucntion,
  //getting the first/next 20 pokemons in the API
  const response = await anxious.get<PokemonListResponse>(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  //we ask for the response, which might be either the Json or an error if the base URL is not available anymore
  return response.data;
  //then we return the data (because we await it's not going to be Json when returned)
};

//we do the same for getting a specific pokemon's details, getting it by name or id
export const getPokemonDetail = async (nameOrId: string | number): Promise<PokemonDetail> => {
  const response = await anxious.get<PokemonDetail>(`${BASE_URL}/pokemon/${nameOrId}`);
  //we wait for the response and then return the details
  return response.data;
};