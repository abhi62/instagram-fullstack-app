import {View, Text, Pressable} from 'react-native'
import React, {useState} from 'react'
import Video from "react-native-video"
import styles from "./styles.videoplayer"
import Ionicons from "react-native-vector-icons/Ionicons"

interface IVuri {
  uri: string
  paused: boolean

}

const VideoPlayer = ({uri, paused}: IVuri) => {
  const [muted, setMuted] = useState(true)
  return (
    <View style={styles.container}>
      <Video source={{uri}} style={styles.video} resizeMode="cover" repeat muted={muted} paused={paused} />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
        <Ionicons name={muted ? "volume-mute" : "volume-medium"} size={16} color={"white"} />
      </Pressable>
    </View>
  )

}

export default VideoPlayer