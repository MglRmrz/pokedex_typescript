import React, {FC, useEffect} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getPokemons} from '../../redux/actions/pokemon.actions';
import {IProps} from './props.interface';

// Components
import {Layout} from '../../components/Layout';
import {PokemonCard} from './components/PokemonCard';
import {Loading} from '../../components/Loading';

// Decimos que el tipo de la constante es de FC<Interface de los props> (FC = Functional component)
const HomeScreen: FC<IProps> = ({navigation, getPokemons, pokemonReducer}) => {
  useEffect(() => {
    getPokemons(pokemonReducer.pokemons.length);
  }, []);

  /**
   * @description Obtenemos más pokemones
   */
  const getMorePokemons = () => {
    getPokemons(pokemonReducer.pokemons.length);
  };

  /**
   * @description Navega hasta la página de detalles
   * @param pokemonId
   */
  const goDetails = (pokemonId: string) => {
    navigation.navigate('Details', {pokemonId});
  };

  return (
    <Layout>
      {pokemonReducer.loading && !pokemonReducer.pokemons.length ? (
        <Loading />
      ) : (
        <FlatList
          data={pokemonReducer.pokemons}
          renderItem={({item}) => (
            <PokemonCard pokemon={item} onPress={goDetails} />
          )}
          keyExtractor={pokemon => pokemon.id}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          style={{paddingHorizontal: 20, marginVertical: 20}}
          onEndReachedThreshold={0.2}
          onEndReached={getMorePokemons}
        />
      )}
    </Layout>
  );
};

const mapStateToProps = ({pokemonReducer}) => ({pokemonReducer});

const mapDispatchToProps = {
  getPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
