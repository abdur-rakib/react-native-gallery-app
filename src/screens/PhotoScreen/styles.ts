import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.88,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  actionButtonContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionButton: {
    width: '42%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
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
    fontSize: 18,
    color: colors.primaryText,
  },
});

export default styles;
