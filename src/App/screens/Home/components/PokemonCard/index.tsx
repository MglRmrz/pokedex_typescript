import React, {FC} from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import {IProps} from './props.interface';
import style from './style';

export const PokemonCard: FC<IProps> = ({pokemon: {id, name}, onPress}) => {
  const pressCard = () => onPress(id);

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('black', false)}
      onPress={pressCard}>
      <View style={style.container}>
        <Text style={style.id}>{id}</Text>
        <Text style={style.name}>{name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
