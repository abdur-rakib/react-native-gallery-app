import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../theme';

const Loading: React.FC = () => {
  return (
    <ActivityIndicator
      color={colors.secondaryText}
      style={styles.loading}
      size="large"
    />
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    marginVertical: 20,
  },
});
