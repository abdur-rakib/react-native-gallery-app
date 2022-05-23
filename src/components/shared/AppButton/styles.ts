import {StyleSheet} from 'react-native';
import {colors} from '../../../theme';

const styles = StyleSheet.create({
  actionButton: {
    width: '42%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    shadowColor: colors.secondaryText,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 0.5,
  },
  actionText: {
    fontSize: 17,
    color: colors.primaryText,
  },
});

export default styles;
