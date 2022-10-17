import {View, Text, FlatList} from 'react-native'
import React from 'react'
import Comments from "../../assets/data/comments.json"
import Comment from "../../components/Comment"
import Input from './Input'

const CommentScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={Comments}
        renderItem={({item}) => <Comment comment={item} includeDetails={true} />}
        style={{padding: 10}}
      />
      <Input />
    </View>
  )
}

export default CommentScreen