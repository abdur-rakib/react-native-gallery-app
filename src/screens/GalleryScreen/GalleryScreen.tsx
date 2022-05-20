import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {commonStyles} from '../../styles/commonStyles';
import axios from 'axios';
import {COMPONENT_TYPE} from '../../../types';
import GalleryItem from '../../components/GalleryItem';

const CLIENT_KEY = 'XdymHxISP3LPo2P0RGC6UJVNPqDy2q8UbLOI3vwaRyg';

const GalleryScreen: React.FC<COMPONENT_TYPE> = ({navigation}) => {
  const [images, setImages] = useState([]);

  const getImage = async () => {
    try {
      const {data} = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${CLIENT_KEY}&per_page=30`,
      );
      setImages(data);
    } catch (error) {
      console.log(
        '🚀 ~ file: GalleryScreen.tsx ~ line 18 ~ getImage ~ error',
        error,
      );
    }
  };

  // set images
  useEffect(() => {
    getImage();
  }, []);

  const renderItem = ({item}) => <GalleryItem item={item} />;
  return (
    <View style={commonStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={4}
      />
    </View>
  );
};

export default GalleryScreen;
