import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles.profile';
import user from '../../assets/data/user.json';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { ProfileNavigationProp } from '../../Navigation/types';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();
  const editProfileHandler = () => {
    navigation.navigate('Edit Profile');
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileDp} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <View style={styles.buttonContainer}>
        <Button text='Edit Profile' onPress={editProfileHandler} />
        <Button text='Go Back' onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default ProfileHeader;
