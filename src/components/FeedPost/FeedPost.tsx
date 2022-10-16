import {Text, View, StyleSheet, Image} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from "./styles.feedPost"
import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal} from 'react';
import Comment from '../Comment';
import {IPost} from "../Types/models"

interface IFeedPost {
  post: IPost
}

const FeedPost = (props: IFeedPost) => {
  const {post} = props
  return (
    <View style={styles.post}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post?.user?.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post?.user?.username}</Text>
        <Entypo
          name='dots-three-horizontal'
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* content */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name='chatbubble-outline'
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name='send'
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name='bookmark'
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Liked By <Text style={styles.bold}>{post?.user?.username}</Text> and{' '}
          <Text style={styles.bold}>66 others</Text>{' '}
        </Text>
        {/* Post Description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>{post?.user?.username} </Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio et
          dignissimos dolore cumque ratione quam molestiae amet nemo veritatis,
          ipsam sed iste illum nisi eaque distinctio culpa provident qui
          quisquam, nulla rerum tempora aut.
        </Text>
        {/* Post Comment */}
        <Text>View all {post.nofComments} comments</Text>
        {post?.comments?.map((comment) => <Comment key={comment.id} comment={comment} />)}

        {/* posted Date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};


export default FeedPost;
