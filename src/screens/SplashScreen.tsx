import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { useAppNavigation } from "../store";
//
import { View, StyleSheet } from "react-native";

function SplashScreen() {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          console.log("done");
          navigation.navigate("Home");
        }}
        style={{
          width: 400,
          height: 400,
          //   backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../assets/splashlottie.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

export default SplashScreen;
