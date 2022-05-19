import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GalleryStackNavigator from './src/navigation/GalleryStackNavigator';
import {colors} from './src/theme';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <GalleryStackNavigator />
    </SafeAreaProvider>
  );
};

export default App;
