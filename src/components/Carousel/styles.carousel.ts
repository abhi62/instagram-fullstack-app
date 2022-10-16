import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  dot: {
    width: 10,
    margin: 10,
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: 'pink',
    marginHorizontal: 5,
  },
});

export default styles;
