import {StyleSheet, ScrollView, View, FlatList} from "react-native";
import FeedPost from "./src/components/FeedPost";
import {IPost} from "./src/components/Types/models";
import posts from "./src/assets/data/posts.json"

interface IPostProps {
  post: IPost
}


const App = () => {

  return (
    <View style={styles.app}>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        // keyExtractor={(item) => `post-${item.createdAt}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})

export default App