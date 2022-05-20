import {Image, View, Text, Pressable} from 'react-native';
import React from 'react';
import {commonStyles} from '../../styles/commonStyles';
import styles from './styles';
import {spacing} from '../../theme';

const PhotoScreen = ({route}) => {
  const {item} = route.params;

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
        <Pressable style={styles.actionButton}>
          <Text style={styles.actionText}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PhotoScreen;
