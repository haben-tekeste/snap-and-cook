import React, { useState, useEffect, useRef } from "react";
import { CameraType, Camera as ExpoCamera, FlashMode } from "expo-camera";
import { View, Alert, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useCapturePhoto } from "../../hooks/useCapturePhoto";
import { useAppSelector } from "../../store";
import { useStyles } from "./style";

interface CameraProps {
  setImage: (value: string) => void;
  stopCamera: () => void;
}

function Camera({ setImage, stopCamera }: CameraProps) {
  const [flashMode, handleFlashMode, takePicture, setCamera, setIsCameraReady] =
    useCapturePhoto();
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <ExpoCamera
        ref={(ref) => setCamera(ref)}
        style={styles.camera}
        flashMode={FlashMode[flashMode]}
        onCameraReady={() => setIsCameraReady(true)}
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
                onPress={() => {
                  takePicture((uri) => {
                    setImage(uri);
                    stopCamera();
                  });
                }}
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