import React from "react";
import { View, Image, ImageProps } from "react-native";
import { Text } from "react-native-paper";
import { useStyles } from "./style";
import { useAppSelector } from "../../store";

type IngredientProps = {
  label: string;
  quantity: number;
  img: ImageProps;
};

function Ingredient({ label, quantity, img }: IngredientProps) {
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <View>
        <Text variant="titleMedium" style={styles.title}>
          {label}
        </Text>
        <Text variant="labelMedium" style={styles.subTitle}>
          {quantity} items
        </Text>
      </View>
    </View>
  );
}

export default Ingredient;
