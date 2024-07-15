import { useState } from "react";
import {
  Camera,
  CameraCapturedPicture,
  FlashMode,
  useCameraPermissions,
} from "expo-camera";
import { Alert } from "react-native";
import { fetchImageBlob } from "../../util";

type CameraType = typeof Camera;

type useCapturePhotoResults = [
  FlashMode,
  () => void,
  (cb: (value: string) => void) => void,
  (value: CameraType | null) => void,
  (value: boolean) => void
];

export const useCapturePhoto = (
  setBlob: (blob: Blob | undefined) => void
): useCapturePhotoResults => {
  const [camera, setCamera] = useState<CameraType | null>();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [flashMode, setFlashMode] = useState<FlashMode>("off");

  const [permission, requestPermission] = useCameraPermissions();
  const handleFlashMode = () => {
    if (flashMode === "on") {
      setFlashMode("off");
    } else if (flashMode === "off") {
      setFlashMode("on");
    } else setFlashMode("auto");
  };

  const takePicture = async (cb: (value: string) => void) => {
    try {
      await requestPermission();
      if (!permission?.granted) return Alert.alert("Camera permission denied");
      if (camera) {
        const photo: CameraCapturedPicture = await camera.takePictureAsync();
        const file = await fetchImageBlob(photo?.uri);
        setBlob(file);
        cb(photo?.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {
    setIsCameraReady(false);
  };

  return [flashMode, handleFlashMode, takePicture, setCamera, setIsCameraReady];
};
