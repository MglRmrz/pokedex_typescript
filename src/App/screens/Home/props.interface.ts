import {IPokemonState} from '../../interfaces/pokemonState.interface';
import {IScreen} from '../../interfaces/screenProp.interface';

export interface IProps extends IScreen {
  getPokemons: (offset?: number, limit?: number) => void;
  pokemonReducer: IPokemonState;
}
