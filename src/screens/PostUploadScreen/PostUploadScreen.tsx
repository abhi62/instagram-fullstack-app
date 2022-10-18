import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  Camera,
  CameraType,
  FlashMode,
  CameraRecordingOptions,
  CameraPictureOptions,
  VideoQuality,
} from 'expo-camera';

const PostUploadScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microPhonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' &&
          microPhonePermission.status === 'granted'
      );
    };
    getPermission();
  }, []);

  if (hasPermission === null) {
    return <Text>Loading...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No Access To Camera</Text>;
  }
  return (
    <View>
      <Text>PostUploadScreen</Text>
    </View>
  );
};

export default PostUploadScreen;
