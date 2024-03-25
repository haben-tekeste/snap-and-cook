import React from "react";
import { View, Image, ImageProps, Pressable } from "react-native";
import { Text, Chip } from "react-native-paper";
import { useStyles } from "./style";
import { useAppSelector } from "../../store";

type IngredientProps = {
  label: string;
  onPress: (value: string) => void;
};

function Ingredient({ label, onPress }: IngredientProps) {
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  return (
    <Pressable style={styles.container}>
      <Chip
        style={styles.chip}
        textStyle={styles.chipText}
        mode="outlined"
        closeIcon={"close"}
        onClose={() => onPress(label)}
      >
        {label}
      </Chip>
    </Pressable>
  );
}

export default Ingredient;
