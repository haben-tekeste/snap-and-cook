import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { fetchImageBlob } from "../../util";

export type ImagePickerResult = [boolean, () => Promise<void>, () => void];
type useImagePickerProps = {
  setImage: (uri: string) => void;
  setBlob: (blob: Blob | undefined) => void;
};
export const useImagePicker = ({
  setImage,
  setBlob,
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
        // quality: 1,
        allowsMultipleSelection: false,
      });

      if (!result.canceled) {
        console.log(result.assets[0]);
        const file = await fetchImageBlob(result.assets[0].uri);
        setImage(result.assets[0].uri);
        setBlob(file);
        setImagePickError(false);
      } else {
        setImage("");
        setImagePickError(true);
      }
    } else {
      Alert.alert(
        "Permission Required",
        "Please grant access to the Media Library."
      );
    }
  };

  const clear = () => setImagePickError(false);

  return [imagePickError, pickImage, clear];
};
