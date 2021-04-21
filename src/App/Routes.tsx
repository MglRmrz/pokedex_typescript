import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from './constants/routes.constant';


const Stack = createStackNavigator();

export default () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {
                    routes.map(({ name, options, component }) =>
                        <Stack.Screen key={name} name={name} component={component} options={options} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}