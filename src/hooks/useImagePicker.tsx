import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert, GestureResponderEvent } from "react-native";

export type ImagePickerResult = [boolean, () => Promise<void>,() => void];
type useImagePickerProps = {
  setImage: (uri: string) => void;
};
export const useImagePicker = ({
  setImage,
}: useImagePickerProps): ImagePickerResult => {
  const [permission, requestPermission] =
    ImagePicker.useMediaLibraryPermissions();
  const [imagePickError, setImagePickError] = useState(false);

  const pickImage = async () => {
    await requestPermission();
    if (permission?.status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        // aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        setImagePickError(false);
      } else {
        setImage("");
        setImagePickError(true);
      }
    } else {
      Alert.alert("Media Library access denied");
    }
  };

  const clear = () => setImagePickError(false)



  return [imagePickError, pickImage, clear];
};
