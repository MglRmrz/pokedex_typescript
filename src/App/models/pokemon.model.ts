import {IPokemon} from '../interfaces/pokemon.interface';

export class MPokemon {
  public id: number;
  public name: string;
  public image: string;

  constructor(pokemon: IPokemon) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.image = pokemon.sprites.front_default;
  }
}
