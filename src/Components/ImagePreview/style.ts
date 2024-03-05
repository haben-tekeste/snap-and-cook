import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CustomTheme } from "../../types/theme";

export const useStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
    img: {
      width: "100%",
      height: "100%",
    },
  });
};
