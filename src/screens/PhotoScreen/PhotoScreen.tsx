import {Image, View, Text} from 'react-native';
import React from 'react';
import {commonStyles} from '../../styles/commonStyles';
import styles from './styles';

const PhotoScreen = ({route}) => {
  const {item} = route.params;
  console.log('🚀 ~ file: PhotoScreen.tsx ~ line 6 ~ PhotoScreen ~ item', item);
  return (
    <View style={commonStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.urls.regular,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.actionButtonContainer}>
        <Text>Save</Text>
        <Text>Share</Text>
      </View>
    </View>
  );
};

export default PhotoScreen;
