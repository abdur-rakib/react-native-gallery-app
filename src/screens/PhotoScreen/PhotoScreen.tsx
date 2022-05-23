import {View} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../styles/commonStyles';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import ImageZoom from 'react-native-image-pan-zoom';
import {spacing} from '../../theme';
import {handleShareImage, saveImageToStorage} from '../../sevices';
import CustomImage from '../../components/shared/CustomImage';
import AppButton from '../../components/shared/AppButton';

const PhotoScreen: React.FC = ({route}) => {
  const [loading, setLoading] = useState(false);
  const {item} = route.params;

  // handle save image
  const handleSaveImage = async () => {
    setLoading(true);
    await saveImageToStorage(item.regular_uri);
    setLoading(false);
  };

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
          disabled={loading}
          title="Download"
          onPress={handleSaveImage}
        />
        <AppButton title="Share" onPress={() => handleShareImage(item)} />
      </View>
    </View>
  );
};

export default PhotoScreen;
