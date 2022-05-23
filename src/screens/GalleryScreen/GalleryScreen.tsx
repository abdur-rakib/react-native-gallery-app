import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../styles/commonStyles';
import {COMPONENT_TYPE} from '../../../types';
import GalleryItem from '../../components/GalleryItem';
import SimpleToast from 'react-native-simple-toast';
import {useInfiniteQuery} from 'react-query';
import {fetchImages} from '../../api';
import Loading from '../../components/shared/Loading';

const GalleryScreen: React.FC<COMPONENT_TYPE> = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  // react-query
  // get image data
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery('images', fetchImages, {
    getNextPageParam: lastPage => {
      return lastPage.nextPage;
    },
  });

  // handle load more
  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  // handle pull down to refresh
  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const renderItem = ({item}) => (
    <GalleryItem
      thumb_uri={item.urls.thumb}
      regular_uri={item.urls.regular}
      username={item.user.first_name}
      date={item.created_at}
      description={item.description}
    />
  );

  return (
    <View style={commonStyles.container}>
      {status === 'loading' ? (
        <View style={[commonStyles.container, commonStyles.center]}>
          <Loading />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.pages.map(page => page.results).flat()}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={30}
          windowSize={101}
          maxToRenderPerBatch={30}
          ListFooterComponent={isFetchingNextPage ? <Loading /> : null}
        />
      )}

      {status === 'error' && SimpleToast.show(error.message)}
    </View>
  );
};

export default GalleryScreen;
