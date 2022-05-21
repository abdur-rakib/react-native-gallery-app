import {Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import CustomImage from '../shared/CustomImage';

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
      <CustomImage
        resizeMode={FastImage.resizeMode.cover}
        uri={item.urls.thumb}
        style={styles.thumbnail}
      />
    </Pressable>
  );
};

export default GalleryItem;
