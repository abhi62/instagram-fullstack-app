import {View, Text} from 'react-native';
import styles from "./styles.comment"
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import {IComment} from '../Types/models'

interface ICommentProps {
  comment: IComment
}

const Comment = (props: ICommentProps) => {
  const {comment} = props
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username} </Text>
        {comment.comment}
      </Text>
      <AntDesign
        name={'hearto'}
        // size={24}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

export default Comment;
