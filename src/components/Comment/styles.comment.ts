import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,
    flex: 1,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
