import React from 'react';
import {SafeAreaView} from 'react-native';
import GalleryScreen from './src/screens/GalleryScreen';
import {commonStyles} from './src/screens/styles/commonStyles';

const App = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <GalleryScreen />
    </SafeAreaView>
  );
};

export default App;
