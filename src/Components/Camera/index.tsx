import React, { useState, useEffect, useRef } from "react";
import { CameraType, Camera as ExpoCamera, FlashMode } from "expo-camera";
import { View, Alert, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useAppSelector } from "../../store";
import { useStyles } from "./style";

function Camera() {
  const [camera, setCamera] = useState<ExpoCamera | null>(null);
  const [cameraStatus, setCameraStatus] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [flashMode, setFlashMode] = useState<FlashMode>(FlashMode.off);
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  const handleCameraPermission = async () => {
    const { status } = await ExpoCamera.requestCameraPermissionsAsync();
    if (status === "granted") setCameraStatus(true);
    else Alert.alert("Camera permission denied");
  };

  const handleFlashMode = () => {
    if (flashMode === "on") {
      setFlashMode("off");
    } else if (flashMode === "off") {
      setFlashMode("on");
    } else {
      setFlashMode("auto");
    }
  };

  const onCameraReady = () => setIsCameraReady(true);

  const takePicture = async () => {
    try {
      if (camera) {
        const photo: any = await camera.takePictureAsync();
        console.log(photo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCameraPermission();
  }, []);
  //   if (!cameraStatus) return;
  return (
    <View style={styles.container}>
      <ExpoCamera
        ref={(ref) => setCamera(ref)}
        style={styles.camera}
        flashMode={FlashMode[flashMode]}
        onCameraReady={onCameraReady}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: "5%",
              top: "10%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={handleFlashMode}
              style={{
                backgroundColor: "#000",
                borderRadius: 50,
                height: 25,
                width: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                ⚡️
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              flex: 1,
              width: "100%",
              padding: 20,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                alignSelf: "center",
                flex: 1,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={takePicture}
                style={{
                  width: 70,
                  height: 70,
                  bottom: 0,
                  borderRadius: 50,
                  backgroundColor: "#fff",
                }}
              />
            </View>
          </View>
        </View>
      </ExpoCamera>
    </View>
  );
}

export default Camera;
