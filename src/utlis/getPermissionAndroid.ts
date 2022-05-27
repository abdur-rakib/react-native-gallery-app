import {PermissionsAndroid} from 'react-native';
import SimpleToast from 'react-native-simple-toast';

const getPermissionAndroid = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      SimpleToast.show('Access denied');
    }
  } catch (error: any) {
    SimpleToast.show(error.message);
  }
};

export default getPermissionAndroid;
