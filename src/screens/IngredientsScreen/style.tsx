import { StyleSheet, Platform, StatusBar } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { CustomTheme } from "../../types/theme";
import Constants from "expo-constants";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.mainBackgroundColor,
      paddingHorizontal: 14,
      paddingTop:
        Platform.OS === "android"
          ? StatusBar.currentHeight / 2
          : Constants.statusBarHeight / 2,
      justifyContent: "space-between",
      paddingBottom: StatusBar.currentHeight || Constants.statusBarHeight,
    },
    title: {
      fontFamily: "SpaceGrotesk_700Bold",
      fontSize: 18,
    },
    more: {
      flexDirection: "row",
      alignItems: "center",
      gap: 14,
      marginTop: 26,
    },
    plusContainer: {
      backgroundColor: "#F0F0F0",
      borderRadius: 6,
      overflow: "hidden",
    },
    plusTitle: {
      fontFamily: "SpaceGrotesk_400Regular",
      fontSize: 18,
    },
    btn: {
      width: wp("90%"),
      paddingVertical: 4,
    },
    btnContainer: {
      marginTop: 46,
      alignItems: "center",
    },
    btnLabel: {
      fontFamily: "SpaceGrotesk_700Bold",
      fontSize: 18,
    },
  });
};
