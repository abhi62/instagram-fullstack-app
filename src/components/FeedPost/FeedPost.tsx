import {Text, View, Pressable, Image} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from "./styles.feedPost"
import {useState} from 'react';
import Comment from '../Comment';
import {IPost} from "../Types/models"
import DoublePressable from "../DoublePressable"
import Carousel from '../Carousel';

interface IFeedPost {
  post: IPost
}

const FeedPost = (props: IFeedPost) => {
  const {post} = props
  const [isDescription, setIsDescription] = useState(false)
  const [isLike, setIsLike] = useState(false)

  const toggleDescriptionFunction = () => {
    setIsDescription(v => !v) //if u want to update whats already there
    // setIsDescription(false) //if u want to override
  }
  const toggleLikeFunction = () => {
    setIsLike(v => !v)
  }

  let content = null
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLikeFunction}>
        <Image
          source={{
            uri: post?.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    )
  } else if (post.images) {
    content = (
      <Carousel images={post.images} onDoublePress={toggleLikeFunction} />
    )
  }

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
      {content}
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLikeFunction}>
            <AntDesign
              name={isLike ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLike ? colors.accent : colors.black}
            />
          </Pressable>
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
        <Text style={styles.text} numberOfLines={isDescription ? 0 : 3}>
          <Text style={styles.bold}>{post?.user?.username} </Text>
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionFunction}>{isDescription ? 'Less' : 'More'}</Text>
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
