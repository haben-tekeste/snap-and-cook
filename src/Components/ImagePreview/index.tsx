import React from "react";
import { View, Image } from "react-native";
import { useAppSelector } from "../../store";
import { useStyles } from "./style";

interface ImagePreviewProps {
  uri: string;
}

function ImagePreview({ uri }: ImagePreviewProps) {
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.img} />
    </View>
  );
}

export default ImagePreview;
