import CameraRoll from '@react-native-community/cameraroll';
import {Platform} from 'react-native';
import Share from 'react-native-share';
import SimpleToast from 'react-native-simple-toast';
import RNFetchBlob from 'rn-fetch-blob';
import {ERROR_TYPE, SHARE_IMAGE_PARAM_TYPE} from '../../types';
import getPermissionAndroid from '../utlis/getPermissionAndroid';

// handle share image
const handleShareImage = async (item: SHARE_IMAGE_PARAM_TYPE) => {
  const options = {
    title: item.description,
    url: item.regular_uri,
    message: '',
  };
  try {
    await Share.open(options);
  } catch (err: ERROR_TYPE) {
    SimpleToast.show(err.message);
  }
};

// handle save image to storage
const saveImageToStorage = async (image_url: string) => {
  // for android device we need to ensure permission
  if (Platform.OS === 'android') {
    const granted = await getPermissionAndroid();
    if (!granted) {
      return;
    }
  }
  const res = await RNFetchBlob.config({
    fileCache: true,
    appendExt: 'JPEG',
  }).fetch('GET', image_url);
  try {
    await CameraRoll.save(res.data, {type: 'photo'});
    SimpleToast.show('Image Downloaded Successfully', SimpleToast.SHORT);
  } catch (error: ERROR_TYPE) {
    SimpleToast.show(error.message, SimpleToast.SHORT);
  }
};

export {handleShareImage, saveImageToStorage};
