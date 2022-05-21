import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../styles/commonStyles';
import {COMPONENT_TYPE} from '../../../types';
import GalleryItem from '../../components/GalleryItem';
import SimpleToast from 'react-native-simple-toast';
import {useInfiniteQuery} from 'react-query';
import {fetchImages} from '../../api';

const GalleryScreen: React.FC<COMPONENT_TYPE> = ({navigation}) => {
  // react-query
  // get image data
  const {data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status} =
    useInfiniteQuery('images', fetchImages, {
      getNextPageParam: lastPage => {
        return lastPage.nextPage;
      },
    });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderItem = ({item}) => <GalleryItem item={item} />;

  return (
    <View style={commonStyles.container}>
      {status === 'loading' ? (
        <Text>LOADING</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.pages.map(page => page.results).flat()}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
          onEndReached={loadMore}
          onEndReachedThreshold={1}
          initialNumToRender={30}
          windowSize={101}
          maxToRenderPerBatch={30}
        />
      )}
      {status === 'error' && SimpleToast.show(error.message)}
    </View>
  );
};

export default GalleryScreen;
