import {FlatList, ViewabilityConfig, ViewToken} from "react-native";
import FeedPost from "../../components/FeedPost";
import {IPost} from "../../components/Types/models";
import posts from "../../assets/data/posts.json"
import {useRef, useState} from "react";

interface IPostProps {
  post: IPost
}


const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null)
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51
  }
  const onViewableItemsChanged = useRef(({viewableItems}: {viewableItems: Array<ViewToken>}) => {
    if (viewableItems.length > 0) {
      setActivePostId(viewableItems[0].item.id)
    }
  })

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} isVisible={activePostId === item.id} />}
      // keyExtractor={(item) => `post-${item.createdAt}`}
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig}
    />
  );
};


export default HomeScreen