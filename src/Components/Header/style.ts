import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CustomTheme } from "../../types/theme";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      width: wp("90%"),
    },
    title: {
      fontFamily: "SpaceGrotesk_700Bold",
      fontSize: 20,
    },
  });
};
