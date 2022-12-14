import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface IButton {
  text?: string;
  onPress: () => void;
}

const Button = ({ text, onPress = () => {} }: IButton) => {
  return (
    <View style={styles.container}>
      <Text onPress={onPress} style={styles.text}>
        {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 5,
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});

export default Button;
