import Share from 'react-native-share';
import SimpleToast from 'react-native-simple-toast';
import {ERROR_TYPE, SHARE_IMAGE_PARAM_TYPE} from '../../types';

// handle share image
const handleShareImage = async (item: SHARE_IMAGE_PARAM_TYPE) => {
  const options = {
    title: item.description,
    url: item.urls.regular,
    message: '',
  };
  try {
    await Share.open(options);
  } catch (err: ERROR_TYPE) {
    SimpleToast.show(err.message);
  }
};

export {handleShareImage};
