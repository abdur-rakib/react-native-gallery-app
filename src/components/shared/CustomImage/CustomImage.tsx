import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';
import {CUSTOM_IMAGE_COMPONENt_PROP_TYPE} from '../../../../types';

const CustomImage = ({
  style,
  uri,
  resizeMode,
}: CUSTOM_IMAGE_COMPONENt_PROP_TYPE) => {
  return (
    <FastImage
      style={style}
      source={{
        uri: uri,
        priority: FastImage.priority.normal,
      }}
      resizeMode={resizeMode}
    />
  );
};

export default CustomImage;
