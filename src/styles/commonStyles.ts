// Common styles all over the project will be here
import {StyleSheet} from 'react-native';
import {colors} from '../theme';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
