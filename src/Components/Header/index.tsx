import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useStyles } from "./style";
import { useAppSelector } from "../../store";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Header;
