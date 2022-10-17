import {StyleSheet, View} from "react-native";
import CommentScreen from "./src/screens/CommentScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";


const App = () => {

  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      {/* <CommentScreen /> */}
      <ProfileScreen />
    </View>
  )
};
const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})


export default App