import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loading: React.FC = () => {
  return <ActivityIndicator style={styles.loading} size="large" />;
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    marginVertical: 20,
  },
});
