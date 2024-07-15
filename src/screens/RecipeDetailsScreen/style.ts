import { CustomTheme } from "../../types/theme";
import { StyleSheet } from "react-native";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    img: {
      width: "100%",
      height: 250,
      objectFit: "cover",
    },

    spaceGroteskFontBold: {
      fontFamily: "SpaceGrotesk_700Bold",
      color: theme.colors.mainTextColor,
    },
    regularFont: {
      fontFamily: "SpaceGrotesk_400Regular",
      color: theme.colors.mainTextColor,
    },
    main: {
      paddingVertical: 6,
      paddingHorizontal: 14,
      backgroundColor: theme.colors.mainBackgroundColor,
    },
    icon: {
      color: "red",
      backgroundColor: "red",
    },
    quickInfo: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginVertical: 14,
    },
    quickInfoIcon: {
      alignItems: "center",
      gap: 1,
    },
    summary: {
      marginTop: 12,
    },
    circle: {
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    nutrients: {
      flexDirection: "row",
      marginVertical: 8,
      justifyContent: "space-between",
    },
    ingredientContainer: {
      width: 120,
      height: 140,
      backgroundColor: "#3d3c3c",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 18,
    },
    ingredientImg: {
      width: 100,
      height: 90,
      objectFit: "fill",
    },
    steps: {
      marginVertical: 4,
      marginBottom: 12,
    },
    stepTitle: {
      marginBottom: 3,
    },
    step: {
      marginVertical: 2,
      paddingBottom: 16,
    },
  });
};
