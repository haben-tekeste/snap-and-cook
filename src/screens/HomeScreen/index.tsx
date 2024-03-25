import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Image, Pressable } from "react-native";
import { Text, Button, Surface, Icon, Modal, Portal } from "react-native-paper";
import mime from "mime";
import FormData from "form-data";
import { useStyles } from "./style";
import { useGetIngredientsFromImageMutation } from "../../services/ingredients";
import { useImagePicker } from "../../hooks/useImagePicker";
import { useAppSelector } from "../../store";
import Camera from "../../Components/Camera";
import ImagePreview from "../../Components/ImagePreview";
import { useAppNavigation } from "../../store";
import Loader from "../../Components/Loader";

function ScannerScreen() {
  const [cameraOn, setCameraOn] = useState<boolean>(false);
  const [image, setImage] = useState("");
  const [blob, setBlob] = useState<Blob | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const { theme } = useAppSelector((state) => state.theme);
  const [imagePickError, pickImage, clear] = useImagePicker({
    setImage,
    setBlob,
  });
  const [
    getIngredientsFromImage,
    { isError, isSuccess, isLoading, data, error },
  ] = useGetIngredientsFromImageMutation();
  const styles = useStyles(theme);
  const { navigate } = useAppNavigation();

  //
  const startCamera = () => setCameraOn(true);
  const stopCamera = () => setCameraOn(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const retry = () => {
    setCameraOn(false);
    setImage("");
    setModalVisible(false);
    setBlob(undefined);
    clear();
  };

  const handleNavigation = async () => {
    if (blob) {
      navigate("Ingredients", {
        file: image,
      });
    }
  };

  const handleSubmit = () => {
    const body = new FormData();
    const imgData = {
      uri: image,
      type: mime.getType(image),
      name: image.split("/").pop(),
    };
    body.append("image", imgData);
    getIngredientsFromImage(body);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("Ingredients", {
        data: data?.items,
      });
    }
  }, [isSuccess]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {cameraOn ? (
        <Camera setImage={setImage} stopCamera={stopCamera} setBlob={setBlob} />
      ) : (
        <>
          <View>
            <View>
              <Image source={require("@assets/home.png")} />
              <Text style={styles.subTitle}>
                Find the recipe you love by taking a photo of the ingredients.
              </Text>
            </View>
            <View style={styles.icons}>
              <Pressable style={styles.icon} onPress={pickImage}>
                <Icon source="image-multiple-outline" size={23} />
              </Pressable>
              <Pressable style={styles.icon} onPress={startCamera}>
                <Icon source="camera" size={37} />
              </Pressable>
              <Pressable style={styles.icon} onPress={retry}>
                <Icon source="refresh" size={23} />
              </Pressable>
            </View>
            <Portal>
              <Modal
                visible={modalVisible}
                onDismiss={hideModal}
                contentContainerStyle={styles.modal}
              >
                {image && <ImagePreview uri={image} />}
              </Modal>
            </Portal>
            {image && (
              <Button onPress={showModal} style={styles.previewBtn}>
                View Image
              </Button>
            )}
          </View>
          <View style={styles.btnContainer}>
            <Button
              mode="contained"
              labelStyle={styles.btnLabel}
              style={[
                styles.btn,
                { backgroundColor: image ? theme.colors.primary : "#9dccaa" },
              ]}
              disabled={image ? false : true}
              onPress={handleSubmit}
            >
              Next
            </Button>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

export default ScannerScreen;
