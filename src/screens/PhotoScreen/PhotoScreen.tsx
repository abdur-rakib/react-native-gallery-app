import {Image, View, Text, TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import Share from 'react-native-share';
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import {commonStyles} from '../../styles/commonStyles';
import styles from './styles';
import getPermissionAndroid from '../../utlis/getPermissionAndroid';
import SimpleToast from 'react-native-simple-toast';

const PhotoScreen = ({route}) => {
  const [disabledSave, setDisabledSave] = useState(false);
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
          .catch(error => {
            SimpleToast.show(error.message, SimpleToast.SHORT);
            setDisabledSave(false);
          })
          .finally(() => setDisabledSave(false));
      })
      .catch((error: {message: string}) => {
        setDisabledSave(false);
        SimpleToast.show(error.message, SimpleToast.SHORT);
      });
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
        <TouchableOpacity
          disabled={disabledSave}
          onPress={handleSaveImage}
          style={styles.actionButton}>
          <Text style={styles.actionText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleShareImage}
          style={styles.actionButton}>
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoScreen;
