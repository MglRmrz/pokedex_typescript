import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {theme} from '../assets/themes';

// Necesario apra react navigation
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//Import routes
import Routes from './Routes';

// Importamos Redux
import {Provider, store} from './redux';

// SplashScreen
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    // Quitamos el splashscreen cuando se termine de cargar el componente
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor={theme().primary} />
        <Routes />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
