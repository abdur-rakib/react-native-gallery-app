import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen';
import PhotoScreen from '../screens/PhotoScreen';
import HeaderTitle from '../components/shared/HeaderTitle';

const GalleryStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center', headerShadowVisible: true}}
        initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen
          options={({route}: {route: any}) => ({
            headerTitle: () => (
              <HeaderTitle
                username={route.params.item.username}
                created_date={route.params.item.date}
              />
            ),
            headerBackTitleVisible: false,
          })}
          name="Photo"
          component={PhotoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GalleryStackNavigator;
