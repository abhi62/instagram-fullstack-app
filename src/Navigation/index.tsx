import { Image, Text, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CommentScreen from '../screens/CommentScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

import logo from '../assets/images/logo.png';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Feed'
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen
          name='Feed'
          component={HomeScreen}
          options={{ headerTitle: HeaderTitle, headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name='UserProfile'
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerTitle: HeaderTitle,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
      {/* <CommentScreen />
      <ProfileScreen />
      <EditProfileScreen />
      <PostUploadScreen /> */}
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode='contain'
      style={{ width: 150, height: 40 }}
    />
  );
};

export default Navigation;
