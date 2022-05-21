import {FlatList, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../styles/commonStyles';
import {COMPONENT_TYPE} from '../../../types';
import GalleryItem from '../../components/GalleryItem';
import SimpleToast from 'react-native-simple-toast';
import {useQuery} from 'react-query';
import {fetchImages} from '../../api';

const GalleryScreen: React.FC<COMPONENT_TYPE> = ({navigation}) => {
  // react-query
  // get image data
  const {isLoading, error, data} = useQuery('images', () => fetchImages(1));

  const renderItem = ({item}) => <GalleryItem item={item} />;
  return (
    <View style={commonStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        // onEndReached={fetchImages}
        onEndReachedThreshold={10}
        initialNumToRender={30}
        windowSize={101}
        maxToRenderPerBatch={30}
      />
      {error && SimpleToast.show(error.message)}
    </View>
  );
};

export default GalleryScreen;
