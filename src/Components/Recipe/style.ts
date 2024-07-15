import { StyleSheet } from "react-native";
import { CustomTheme } from "../../types/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    chipText: {
      fontFamily: "SpaceGrotesk_400Regular",
      color: theme.colors.mainTextColor,
    },
    chip: {
      backgroundColor: theme.colors.gray,
    },
    recipeItemContainer: {
      marginVertical: 18,
      // paddingHorizontal:9
      display: "flex",
      gap: 6,
      width: wp("85%"),
      borderRadius: 8,
      padding: 6,
    },
    recipeItemImage: {
      width: "100%",
      height: 200,
      borderRadius: 8,
    },
    recipeItemInfo: {
      display: "flex",
      gap: 4,
    },
    recipeItemName: {
      fontFamily: "SpaceGrotesk_700Bold",
      color: theme.colors.mainTextColor,
    },
    recipeItemChipContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 4,
    },
    recipeItemChip: {
      width: "auto",
    },
  });
};
