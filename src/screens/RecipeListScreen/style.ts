import { StyleSheet } from "react-native";
import { CustomTheme } from "../../types/theme";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    title: {
      fontFamily: "SpaceGrotesk_700Bold",
      fontSize: 18,
    },
    header: {
      marginBottom: 18,
      // backgroundColor: theme.colors.mainBackgroundColor,
    },
    tab: {
      fontFamily: "SpaceGrotest_700Bold",
    },
    flatList: {
      alignItems: "center",
      backgroundColor: theme.colors.mainBackgroundColor,
    },
  });
};
