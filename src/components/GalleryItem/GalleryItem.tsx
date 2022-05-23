import {Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import CustomImage from '../shared/CustomImage';
import {SINGLE_PHOTO_PROP_TYPE} from '../../../types';

const GalleryItem: React.FC<SINGLE_PHOTO_PROP_TYPE> = ({
  thumb_uri,
  regular_uri,
  username,
  date,
  description,
}) => {
  // navigate
  const navigation = useNavigation();

  // restruct data
  const item = {
    thumb_uri,
    regular_uri,
    username,
    date,
    description,
  };
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
        uri={thumb_uri}
        style={styles.thumbnail}
      />
    </Pressable>
  );
};

export default GalleryItem;
