import FastImage from 'react-native-fast-image';
import React, {useState} from 'react';
import {CUSTOM_IMAGE_COMPONENt_PROP_TYPE} from '../../../../types';
const placeholderImage = require('../../../assets/placeholder.png');

const CustomImage = ({
  style,
  uri,
  resizeMode,
}: CUSTOM_IMAGE_COMPONENt_PROP_TYPE) => {
  const [source, setSource] = useState(placeholderImage);
  return (
    <FastImage
      style={style}
      source={source}
      onLoad={() => {
        setSource({uri: uri, priority: FastImage.priority.normal});
      }}
      resizeMode={resizeMode}
    />
  );
};

export default CustomImage;
