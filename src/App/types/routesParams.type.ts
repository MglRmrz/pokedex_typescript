export type RoutesParamsType = {
  Home: undefined;
  Details: {
    pokemonId: string;
  };
};

export type RoutesType = 'Home' | 'Details';
