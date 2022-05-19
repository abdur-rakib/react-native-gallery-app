import {Button, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../styles/commonStyles';
import {COMPONENT_TYPE} from '../../../types';

const GalleryScreen: React.FC<COMPONENT_TYPE> = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
      <Button title="Go Next" onPress={() => navigation.navigate('Photo')} />
    </View>
  );
};

export default GalleryScreen;
