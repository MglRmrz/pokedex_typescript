import React, { FC } from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

export const Loading: FC<{}> = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView 
            source={require('../../../assets/animations/picachu_loading.json')}
            autoPlay
            loop
        />
    </View>
)