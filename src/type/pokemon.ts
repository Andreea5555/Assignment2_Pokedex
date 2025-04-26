//all the interfaces we use

export interface PokemonListResponse { //this interface is for the display of pokemons (so by example count are all the pokemons we get)
    count: number; 
    next: string | null;
    previous: string | null;
    results: PokemonBasic[];
  }
  
  export interface PokemonBasic { //this is the info we display in the PokedexPage (kept to a minimal)
    name: string;
    url: string; 
  }
  
  export interface PokemonDetail { //this was a bit confusing but it reffers to what details we extract
    id: number;
    name: string;
    height: number;
    weight: number;
    types: { //by examples here we get a list of all the types a pokemon is instead of just one
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    stats: { //and here we have the stats we display for each pokemon
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    sprites: { //these are just the images
      front_default: string; //the smaller one in the PokedexPage
      other: {
        'official-artwork': { //the official artwork displayed when entering the PokemonDetail
          front_default: string;
        };
      };
    };
  }