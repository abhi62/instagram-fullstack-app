import {View, Text, Image, TextInput, Pressable, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const Input = () => {
  const [newComment, setNewComment] = useState('')

  const onPost = () => {
    setNewComment("")
  }
  return (
    <View style={styles.container}>
      <Image
        source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg"}}
        style={styles.avatar}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder='Write your comment...' style={styles.comment}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>Post</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: "flex-end",
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
  },
  comment: {
    flex: 1,

    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,

    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 50,

    marginLeft: 5
  },
  button: {
    position: "absolute",
    right: 15,
    bottom: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,

  }
})

export default Input