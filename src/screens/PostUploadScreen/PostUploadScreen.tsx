import {
  Camera,
  CameraType,
  FlashMode,
  CameraRecordingOptions,
  CameraPictureOptions,
  VideoQuality,
} from 'expo-camera';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import colors from '../../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const flashMode = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const camera = useRef<Camera>(null);
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

  function toggleCameraType() {
    setCameraType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  function toggleFlash() {
    const currentIndex = flashMode.indexOf(flash);
    const nextIndex =
      currentIndex === flashMode.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashMode[nextIndex]);
  }

  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }
    const options: CameraPictureOptions = {
      quality: 0.5,
      base64: true,
      skipProcessing: true,
    };
    const result = await camera.current?.takePictureAsync(options);
  };
  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }
    const options: CameraRecordingOptions = {
      quality: VideoQuality['480p'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);
    try {
      const result = await camera.current.recordAsync(options);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const stopRecording = async () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };

  return (
    <View style={styles.root}>
      <Camera
        ref={camera}
        style={styles.camera}
        type={cameraType}
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={[styles.buttonContainer, { top: 15 }]}>
        <MaterialIcons name={'close'} size={16} color={colors.white} />
        <Pressable onPress={toggleFlash}>
          <MaterialIcons
            name={flashModeIcon[flash]}
            size={16}
            color={colors.white}
          />
        </Pressable>
        <MaterialIcons name={'settings'} size={16} color={colors.white} />
      </View>
      <View style={[styles.buttonContainer, { bottom: 25 }]}>
        <MaterialIcons name={'photo-library'} size={16} color={colors.white} />
        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}
          >
            <View
              style={[
                styles.circle,
                { backgroundColor: isRecording ? colors.accent : colors.white },
              ]}
            />
          </Pressable>
        )}
        <Pressable onPress={toggleCameraType}>
          <MaterialIcons
            name={'flip-camera-ios'}
            size={16}
            color={colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
  },
  button: {},
  text: {},
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: colors.white,
  },
});
export default PostUploadScreen;
