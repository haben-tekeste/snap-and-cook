import { StyleSheet, Platform, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Constants from "expo-constants";
import { CustomTheme } from "../../types/theme";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.mainBackgroundColor,
      paddingHorizontal: 14,
      paddingTop:
        Platform.OS === "android"
          ? StatusBar.currentHeight! / 2
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
    chipContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 5,
      marginTop: 12,
    },
    modal: {
      backgroundColor: theme.colors.mainBackgroundColor,
      padding: 15,
      height: hp("25%"),
      marginHorizontal: 35,
      justifyContent: "space-around",
    },
    ingredientBtn: {
      width: wp("40%"),
    },
    textInput: {
      borderColor: theme.colors.primary,
      borderWidth: 1,
    },
  });
};
