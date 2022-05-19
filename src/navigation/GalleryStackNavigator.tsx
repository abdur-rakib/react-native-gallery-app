import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen';
import PhotoScreen from '../screens/PhotoScreen';

const GalleryStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center', headerShadowVisible: false}}
        initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: '25 March, 2022',
          }}
          name="Photo"
          component={PhotoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GalleryStackNavigator;
