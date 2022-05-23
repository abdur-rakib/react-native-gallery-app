import FastImage from 'react-native-fast-image';
import React, {useState} from 'react';
import {CUSTOM_IMAGE_COMPONENT_PROP_TYPE} from '../../../../types';
const placeholderImage = require('../../../assets/placeholder.png');

const CustomImage: React.FC<CUSTOM_IMAGE_COMPONENT_PROP_TYPE> = ({
  style,
  uri,
  resizeMode,
}) => {
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
