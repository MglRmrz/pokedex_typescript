import {EPokemonTypes} from '../types/pokemon.types';
import axios from '../../axios';
import {Dispatch} from 'redux';
import {StateType} from '../../types/state.type';
import {IPokemonResponse} from '../../interfaces/pokemonResponse.interface';
import {MPokemon} from '../../models/pokemon.model';

/**
 * @description Limpia al pokemon actual
 */
export const clearPokemon = () => (dispatch: Dispatch) => {
  dispatch({
    type: EPokemonTypes.ClearPokemon,
  });
};

/**
 * @description Busca a un pokemon por su ID
 * @param pokemonId Id del pokemon a buscar
 */
export const getPokemonById = (pokemonId: string) => async (
  dispatch: Dispatch,
) => {
  try {
    dispatch({
      type: EPokemonTypes.LoadingPokemons,
    });

    const {data} = await axios.get(`/pokemon/${pokemonId}`);

    const pokemon = new MPokemon(data);

    dispatch({
      type: EPokemonTypes.GetCurrentPokemon,
      playload: pokemon,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: EPokemonTypes.ErrorGetPokemons,
      playload: error,
    });
  }
};

/**
 * @description Obtiene a todos los pokemones
 */
export const getPokemons = (offset: number = 0, limit: number = 20) => async (
  dispatch: Dispatch,
  getState: StateType,
) => {
  try {
    dispatch({
      type: EPokemonTypes.LoadingPokemons,
    });

    const pokemons: IPokemonResponse[] = getState().pokemonReducer.pokemons;
    const {data} = await axios.get(`/pokemon?offset=${offset}&limit=${limit}`);
    const resp = data.results.map(pokemon => ({
      name: pokemon.name,
      id: pokemon.url.split('/').slice(-2)[0],
    }));
    pokemons.push(...resp);

    dispatch({
      type: EPokemonTypes.GetPokemons,
      playload: pokemons,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: EPokemonTypes.ErrorGetPokemons,
      playload: error,
    });
  }
};
