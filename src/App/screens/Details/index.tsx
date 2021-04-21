import React, {FC, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import style from './style';
import {IProps} from './props.interface';
import {connect} from 'react-redux';
import {
  getPokemonById,
  clearPokemon,
} from '../../redux/actions/pokemon.actions';

import {Layout} from '../../components/Layout';
import {ScrollView} from 'react-native-gesture-handler';
import {Loading} from '../../components/Loading';

const DetailsScreen: FC<IProps> = ({
  route,
  getPokemonById,
  pokemonReducer: {currentPokemon, loading},
  clearPokemon,
}) => {
  useEffect(() => {
    const {pokemonId} = route.params;
    getPokemonById(pokemonId);

    // Esta función se dispara cuando se sale de la página
    return () => {
      clearPokemon();
    };
  }, []);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View style={style.container}>
            {currentPokemon && (
              <>
                <Image
                  source={{uri: currentPokemon.image}}
                  style={style.image}
                />
                <Text style={style.name}>{currentPokemon.name}</Text>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </Layout>
  );
};

const mapStateToProps = ({pokemonReducer}) => ({pokemonReducer});

const mapDispatchToProps = {
  getPokemonById,
  clearPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
