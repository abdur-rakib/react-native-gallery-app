import {GestureResponderEvent} from 'react-native';
import {ResizeMode} from 'react-native-fast-image';

// component type
export type COMPONENT_TYPE = {
  children?: React.ReactNode;
};

// share image function param type
export type SHARE_IMAGE_PARAM_TYPE = {
  description: string;
  regular_uri: string;
};

// error type
export type ERROR_TYPE = any | {message?: string};

// custom image component prop type
export type CUSTOM_IMAGE_COMPONENT_PROP_TYPE = {
  style: {};
  uri: string;
  resizeMode: ResizeMode | undefined;
};

// app button props type
export type APP_BUTTON_PROP_TYPE = {
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
};

// header title prop type
export type HEADER_TITLE_PROP_TYPE = {
  username: string;
  created_date: string;
};

// single photo prop type
export type SINGLE_PHOTO_PROP_TYPE = {
  thumb_uri: string;
  regular_uri: string;
  username: string;
  date: string;
  description: string;
};
