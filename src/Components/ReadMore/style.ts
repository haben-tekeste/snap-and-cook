import { CustomTheme } from "../../types/theme";
import { StyleSheet } from "react-native";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      overflow: "hidden",
      position: "relative",
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
    },
    gradient: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 30,
    },
    readMoreButton: {
      marginTop: 10,
      alignItems: "center",
    },
    readMoreText: {
      color: "#1e90ff",
      fontSize: 16,
    },
  });
};
