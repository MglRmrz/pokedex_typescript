import {IPokemonState} from '../../interfaces/pokemonState.interface';
import {EPokemonTypes} from '../types/pokemon.types';

const INITIAL_STATE: IPokemonState = {
  pokemons: [],
  currentPokemon: null,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, {playload, type}): IPokemonState => {
  switch (type) {
    case EPokemonTypes.GetPokemons:
      return {
        ...state,
        pokemons: playload,
        loading: false,
      };

    case EPokemonTypes.GetCurrentPokemon:
      return {
        ...state,
        loading: false,
        currentPokemon: playload,
      };

    case EPokemonTypes.ClearPokemon:
      return {
        ...state,
        currentPokemon: null,
      };

    case EPokemonTypes.LoadingPokemons:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case EPokemonTypes.ErrorGetPokemons:
      return {
        ...state,
        error: playload,
        loading: false,
      };

    default:
      return state;
  }
};
