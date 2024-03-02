import { StyleSheet, StatusBar, Platform } from "react-native";
import { CustomTheme } from "../../types/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.mainBackgroundColor,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight / 2 : 0,
      // paddingBottom: StatusBar.currentHeight,
      justifyContent: "space-between",
    },
    subTitle: {
      fontFamily: "SpaceGrotesk_400Regular",
      fontSize: 16,
      textAlign: "center",
      marginTop: 5,
      paddingHorizontal: 4,
    },
    icons: {
      marginTop: 35,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 40,
    },
    icon: {
      borderRadius: 50,
      // borderWidth:1,
      padding: 14,
      justifyContent: "center",
      alignItems: "center",
      ...Platform.select({
        android: {
          elevation: 1.5,
        },
        ios: {
          shadowColor: "#ddd",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 3,
          shadowRadius: 5,
          backgroundColor: "#fff",
        },
      }),
    },
    btn: {
      width: wp("90%"),
      paddingVertical: 4,
    },
    btnContainer: {
      marginTop: 46,
      alignItems: "center",
      marginBottom: StatusBar.currentHeight,
    },
    btnLabel: {
      fontFamily: "SpaceGrotesk_700Bold",
      fontSize: 18,
    },
  });
};
