import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import GalleryStackNavigator from './src/navigation/GalleryStackNavigator';
import {colors} from './src/theme';

const App: React.FC = () => {
  // hide splash screen
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <GalleryStackNavigator />
    </SafeAreaProvider>
  );
};

export default App;
