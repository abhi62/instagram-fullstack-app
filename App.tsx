import {StyleSheet, View} from "react-native";
import CommentScreen from "./src/screens/CommentScreen";
import HomeScreen from "./src/screens/HomeScreen";


const App = () => {

  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      <CommentScreen />
    </View>
  )
};
const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})


export default App