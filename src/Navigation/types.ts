import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
export type RootNavigator = {
  Home: undefined;
  Comments: {
    postId: string;
  };
};
export type BottomTabNavigatorParmList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notification: undefined;
  MyProfile: undefined;
};
export type MyUserProfileNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParmList,
  'MyProfile'
>;
export type MyUserProfileRoutProp = RouteProp<
  BottomTabNavigatorParmList,
  'MyProfile'
>;

export type HomeStackNavigatorParmList = {
  Feed: undefined;
  UserProfile: {
    userId: string;
  };
};
export type UserProfileRoutProp = RouteProp<
  HomeStackNavigatorParmList,
  'UserProfile'
>;
export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParmList,
  'UserProfile'
>;

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParmList,
  'Feed'
>;
export type ProfStackNavigator = {
  Profile: undefined;
  'Edit Profile': undefined;
};

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfStackNavigator,
  'Profile'
>;
