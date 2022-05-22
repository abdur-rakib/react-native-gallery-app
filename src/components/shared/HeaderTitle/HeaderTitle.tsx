import {Text, View} from 'react-native';
import React from 'react';
import {HEADER_TITLE_PROP_TYPE} from '../../../../types';
import {commonStyles} from '../../../styles/commonStyles';
import styles from './styles';

const HeaderTitle: React.FC<HEADER_TITLE_PROP_TYPE> = ({
  username,
  created_date,
}) => {
  return (
    <View style={commonStyles.center}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.date}>{new Date(created_date).toDateString()}</Text>
    </View>
  );
};

export default HeaderTitle;
