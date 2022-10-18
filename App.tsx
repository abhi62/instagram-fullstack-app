import {StyleSheet, View} from "react-native";
import CommentScreen from "./src/screens/CommentScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import PostUploadScreen from "./src/screens/PostUploadScreen";
import ProfileScreen from "./src/screens/ProfileScreen";


const App = () => {

  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      {/* <CommentScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <EditProfileScreen /> */}
      <PostUploadScreen />
    </View>
  )
};
const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})


export default App