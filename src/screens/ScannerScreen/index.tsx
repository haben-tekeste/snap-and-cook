import React from "react";
import { SafeAreaView, View, Image, Pressable } from "react-native";
import { Text, Button, Surface, Icon, MD3Colors } from "react-native-paper";
import { useStyles } from "./style";
import { useAppSelector } from "../../store";

function ScannerScreen() {
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image source={require("@assets/home.png")} />
          <Text style={styles.subTitle}>
            Find the recipe you love by taking a photo of the ingredients.
          </Text>
        </View>
        <View style={styles.icons}>
          <View style={styles.icon}>
            <Icon source="image-multiple-outline" size={23} />
          </View>
          <Pressable style={styles.icon}>
            <Icon source="camera" size={37} />
          </Pressable>
          <Pressable style={styles.icon}>
            <Icon source="refresh" size={23} />
          </Pressable>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode="contained"
          labelStyle={styles.btnLabel}
          style={styles.btn}
          rippleColor="#ad33e5"
          
        >
          Next
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default ScannerScreen;
