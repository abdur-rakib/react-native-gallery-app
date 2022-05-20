import {Image, View, Text, Pressable} from 'react-native';
import React from 'react';
import Share from 'react-native-share';
import {commonStyles} from '../../styles/commonStyles';
import styles from './styles';

const PhotoScreen = ({route}) => {
  const {item} = route.params;

  // handle share image
  const handleShareImage = async () => {
    const options = {
      title: item.description,
      url: item.urls.regular,
      message: '',
    };
    try {
      const shareResponse = await Share.open(options);
      console.log(
        '🚀 ~ file: PhotoScreen.tsx ~ line 23 ~ handleShareImage ~ shareResponse',
        shareResponse,
      );
    } catch (err) {
      console.log(
        '🚀 ~ file: PhotoScreen.tsx ~ line 28 ~ handleShareImage ~ err',
        err,
      );
    }
  };
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
        <Pressable style={styles.actionButton}>
          <Text style={styles.actionText}>Save</Text>
        </Pressable>
        <Pressable onPress={handleShareImage} style={styles.actionButton}>
          <Text style={styles.actionText}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PhotoScreen;
