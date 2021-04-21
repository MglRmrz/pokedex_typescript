import {IPokemonState} from '../interfaces/pokemonState.interface';

export type StateType = () => {
  pokemonReducer: IPokemonState;
};
