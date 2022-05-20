import {Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const GalleryItem: React.FC = ({item}) => {
  // navigate
  const navigation = useNavigation();
  // handle go to details
  const handlePress = () => {
    navigation.navigate('Photo', {
      item,
    });
  };
  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <FastImage
        style={styles.thumbnail}
        source={{
          uri: item.urls.thumb,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </Pressable>
  );
};

export default GalleryItem;
