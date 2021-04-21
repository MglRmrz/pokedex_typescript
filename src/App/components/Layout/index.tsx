import React from 'react';
import { View } from 'react-native';
import { theme } from '../../../assets/themes';

export const Layout = ({ children }) => (
    <View style={{ flex: 1, backgroundColor: theme().white }}>
        {children}
    </View>
)