import {Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

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
      <Image
        style={styles.thumbnail}
        source={{
          uri: item.urls.thumb,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default GalleryItem;
