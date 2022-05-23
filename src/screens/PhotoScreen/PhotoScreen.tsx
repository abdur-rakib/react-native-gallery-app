import {View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../styles/commonStyles';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import ImageZoom from 'react-native-image-pan-zoom';
import {spacing} from '../../theme';
import {handleShareImage, saveImageToStorage} from '../../sevices';
import CustomImage from '../../components/shared/CustomImage';
import AppButton from '../../components/shared/AppButton';

const PhotoScreen: React.FC = ({route}) => {
  const {item} = route.params;

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
            uri={item.regular_uri}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
        </ImageZoom>
      </View>
      <View style={styles.actionButtonContainer}>
        <AppButton
          title="Download"
          onPress={() => saveImageToStorage(item.regular_uri)}
        />
        <AppButton title="Share" onPress={() => handleShareImage(item)} />
      </View>
    </View>
  );
};

export default PhotoScreen;
