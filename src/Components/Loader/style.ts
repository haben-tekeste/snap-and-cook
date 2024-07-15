import { StyleSheet } from "react-native";
import { CustomTheme } from "../../types/theme";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.mainBackgroundColor,
    },
    text: {
      fontFamily: "SpaceGrotesk_700Bold",
      color: theme.colors.mainTextColor,
      fontSize: 16,
    },
  });
};
