import {View, Text, Image, FlatList} from 'react-native'
import React from 'react'
import styles from "./styles.profile"
import user from "../../assets/data/user.json"
import Button from '../../components/Button'
import FeedPost from '../../components/FeedPost'
import ProfileHeader from './ProfileHeader'
import FeedGridView from '../../components/FeedGridView/FeedGridView'

const ProfileScreen = () => {
  return <FeedGridView post={user.posts} listHeaderComponent={ProfileHeader} />

}

export default ProfileScreen