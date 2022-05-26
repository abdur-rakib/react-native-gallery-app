import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {APP_BUTTON_PROP_TYPE} from '../../../../types';
import {colors} from '../../../theme';

const AppButton: React.FC<APP_BUTTON_PROP_TYPE> = ({
  title,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        ...styles.actionButton,
        backgroundColor: disabled ? '#f5f5f54d' : colors.secondary,
        shadowColor: disabled ? '#f5f5f54d' : colors.secondaryText,
      }}>
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
