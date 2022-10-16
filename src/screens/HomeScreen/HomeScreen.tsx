import {FlatList} from "react-native";
import FeedPost from "../../components/FeedPost";
import {IPost} from "../../components/Types/models";
import posts from "../../assets/data/posts.json"

interface IPostProps {
  post: IPost
}


const HomeScreen = () => {

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      // keyExtractor={(item) => `post-${item.createdAt}`}
      showsVerticalScrollIndicator={false}
    />
  );
};


export default HomeScreen