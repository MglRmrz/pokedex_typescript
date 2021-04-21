import {MPokemon} from '../models/pokemon.model';
import {IPokemonResponse} from './pokemonResponse.interface';

export interface IPokemonState {
  pokemons: IPokemonResponse[];
  loading: boolean;
  error: any | null;
  currentPokemon: MPokemon | null;
}
