import {Text, View, StyleSheet, Image} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from "./styles"

const FeedPost = () => {
  return (
    <View style={styles.post}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Abhishek</Text>
        <Entypo
          name='dots-three-horizontal'
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
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
          Liked By <Text style={styles.bold}>abhi</Text> and{' '}
          <Text style={styles.bold}>66 others</Text>{' '}
        </Text>
        {/* Post Description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>Abhishek </Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio et
          dignissimos dolore cumque ratione quam molestiae amet nemo veritatis,
          ipsam sed iste illum nisi eaque distinctio culpa provident qui
          quisquam, nulla rerum tempora aut.
        </Text>
        {/* Post Comment */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>Abhishek </Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio et
            dignissimos
          </Text>
          <AntDesign
            name={'hearto'}
            // size={24}
            style={styles.icon}
            color={colors.black}
          />
        </View>
        {/* posted Date */}
        <Text>19 December, 2021</Text>
      </View>
    </View>
  );
};


export default FeedPost;
