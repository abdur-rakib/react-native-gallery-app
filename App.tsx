import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GalleryScreen from './src/screens/GalleryScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GalleryScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
