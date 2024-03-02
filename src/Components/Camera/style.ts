import { StyleSheet } from "react-native";
import { CustomTheme } from "../../types/theme";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
  });
};
