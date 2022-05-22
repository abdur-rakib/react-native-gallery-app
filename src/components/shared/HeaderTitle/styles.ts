import {StyleSheet} from 'react-native';
import {colors, spacing} from '../../../theme';

const styles = StyleSheet.create({
  username: {
    fontSize: spacing.p1,
    color: colors.black,
    fontWeight: '600',
    marginBottom: 1,
  },
  date: {
    fontSize: spacing.p4,
    color: colors.primaryText,
  },
});

export default styles;
