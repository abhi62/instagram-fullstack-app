import { Image, Text, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommentScreen from '../screens/CommentScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { RootNavigator } from './types';

const Stack = createNativeStackNavigator<RootNavigator>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen
          name='Home'
          component={BottomTabNavigator}
          options={{ headerShown: false }}
          // options={{ headerTitle: HeaderTitle, headerTitleAlign: 'center' }}
        />
        <Stack.Screen name='Comments' component={CommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
