import {IPokemonResponse} from '../../../../interfaces/pokemonResponse.interface';

export interface IProps {
  pokemon: IPokemonResponse;
  onPress: (pokemonId: string) => void;
}
