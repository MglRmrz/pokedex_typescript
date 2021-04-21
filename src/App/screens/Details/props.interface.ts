import {IPokemonState} from '../../interfaces/pokemonState.interface';
import {IScreen} from '../../interfaces/screenProp.interface';

export interface IProps extends IScreen {
  pokemonReducer: IPokemonState;
  getPokemonById: (pokemonId: string) => void;
  clearPokemon: () => void;
}
