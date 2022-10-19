import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import styles from './styles.profile';
import user from '../../assets/data/user.json';
import Button from '../../components/Button';
import FeedPost from '../../components/FeedPost';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  MyUserProfileNavigationProp,
  UserProfileNavigationProp,
  MyUserProfileRoutProp,
  UserProfileRoutProp,
} from '../../Navigation/types';

const ProfileScreen = () => {
  const route = useRoute<MyUserProfileRoutProp | UserProfileRoutProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyUserProfileNavigationProp
  >();
  const userId = route.params?.userId;
  // query the user with user id
  return <FeedGridView post={user.posts} listHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
