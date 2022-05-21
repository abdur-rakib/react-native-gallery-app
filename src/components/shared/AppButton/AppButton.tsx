import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {APP_BUTTON_PROP_TYPE} from '../../../../types';

const AppButton: React.FC<APP_BUTTON_PROP_TYPE> = ({
  title,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.actionButton}>
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
