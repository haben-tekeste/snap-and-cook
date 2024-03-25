import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CustomTheme } from "../../types/theme";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      // marginTop: 18,
      // width: wp("28%"),
      // height: hp("16%"),
      // borderWidth: 1,
      // marginRight: 10,
      // borderRadius: 6,
      // padding: 6,
      // borderColor: theme.colors.gray,
      // justifyContent: "space-around",
    },
    img: {
      width: "60%",
      height: "50%",
      borderRadius: 10,
    },
    title: {
      fontFamily: "SpaceGrotesk_700Bold",
    },
    subTitle: {
      fontFamily: "SpaceGrotesk_400Regular",
      color: "#638763",
    },
    chip: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.mainTextColor,
    },
    chipText: {
      fontFamily: "SpaceGrotesk_400Regular",
    },
  });
};
