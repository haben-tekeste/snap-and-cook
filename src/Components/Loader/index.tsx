import { View } from "react-native";
import { Text } from "react-native-paper";
import LottieView from "lottie-react-native";
import { TypeAnimation } from "react-native-type-animation";
import { useAppSelector } from "../../store";
import { useStyles } from "./style";

function Loader() {
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 0 }}>
        <LottieView
          autoPlay
          style={{
            width: 400,
            height: 300,
            //   backgroundColor: "#eee",
            borderColor: "red",
          }}
          source={require("@assets/Loading.json")}
        />
      </View>
      <View>
        <TypeAnimation
          sequence={[
            { text: "Analyzing ingredients... 🍳🔍" },
            { text: "Sending your kitchen snapshot... 📤🌐" },

            { text: "Ingredients on their way to the recipe lab... ⚗️🔬" },
          ]}
          loop
          style={styles.text}
        />
      </View>
    </View>
  );
}

export default Loader;
