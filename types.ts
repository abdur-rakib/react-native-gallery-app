import {ResizeMode} from 'react-native-fast-image';

// component type
export type COMPONENT_TYPE = {
  children?: React.ReactNode;
};

// share image function param type
export type SHARE_IMAGE_PARAM_TYPE = {
  description: string;
  urls: {regular: string};
};

// error type
export type ERROR_TYPE = any | {message?: string};

// custom image component prop type
export type CUSTOM_IMAGE_COMPONENt_PROP_TYPE = {
  style: {};
  uri: string;
  resizeMode: ResizeMode | undefined;
};
