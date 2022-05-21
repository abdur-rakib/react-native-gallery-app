import {View, Text, TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import {commonStyles} from '../../styles/commonStyles';
import styles from './styles';
import getPermissionAndroid from '../../utlis/getPermissionAndroid';
import SimpleToast from 'react-native-simple-toast';
import FastImage from 'react-native-fast-image';
import ImageZoom from 'react-native-image-pan-zoom';
import {spacing} from '../../theme';
import {handleShareImage} from '../../sevices';
import {ERROR_TYPE} from '../../../types';
import CustomImage from '../../components/shared/CustomImage';

const PhotoScreen = ({route}) => {
  const [disabledSave, setDisabledSave] = useState(false);
  const {item} = route.params;

  // handle save image from url
  const handleSaveImage = async () => {
    // for android device we need to ensure permission
    if (Platform.OS === 'android') {
      const granted = await getPermissionAndroid();
      if (!granted) {
        return;
      }
    }
    setDisabledSave(true);
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
    })
      .fetch('GET', item.urls.regular)
      .then((res: {data: string}) => {
        CameraRoll.save(res.data, {type: 'photo'})
          .then(() => {
            SimpleToast.show(
              'Image Downloaded Successfully',
              SimpleToast.SHORT,
            );
            setDisabledSave(false);
          })
          .catch((error: ERROR_TYPE) => {
            SimpleToast.show(error.message, SimpleToast.SHORT);
            setDisabledSave(false);
          })
          .finally(() => setDisabledSave(false));
      })
      .catch((error: ERROR_TYPE) => {
        setDisabledSave(false);
        SimpleToast.show(error.message, SimpleToast.SHORT);
      });
  };

  return (
    <View style={commonStyles.container}>
      <View style={styles.imageContainer}>
        <ImageZoom
          style={commonStyles.container}
          cropWidth={spacing.screenWidth}
          cropHeight={spacing.screenHeight}
          imageWidth={spacing.screenWidth}
          imageHeight={spacing.screenHeight}
          maxOverflow={0}>
          <CustomImage
            uri={item.urls.regular}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
        </ImageZoom>
      </View>
      <View style={styles.actionButtonContainer}>
        <TouchableOpacity
          disabled={disabledSave}
          onPress={handleSaveImage}
          style={styles.actionButton}>
          <Text style={styles.actionText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleShareImage(item)}
          style={styles.actionButton}>
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoScreen;
