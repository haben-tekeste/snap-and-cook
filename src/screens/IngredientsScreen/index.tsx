import React from "react";
import {
  View,
  Pressable,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { Text, Button, Icon } from "react-native-paper";
import { useAppSelector } from "../../store";
import { useStyles } from "./style";
import Ingredient from "../../Components/Ingredient";

function IngredientsScreen() {
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  const DATA = [
    {
      id: "1",
      label: "Tomato",
      quantity: 2,
      img: require("@assets/home.png"),
    },
    {
      id: "2",
      label: "Tomato",
      quantity: 2,
      img: require("@assets/home.png"),
    },
    {
      id: "3",
      label: "Tomato",
      quantity: 2,
      img: require("@assets/home.png"),
    },
  ];
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View>
        <Text style={styles.title}>Recognized Ingredients</Text>
        <FlatList
          numColumns={3}
          key={3}
          data={DATA}
          renderItem={({ item }) => (
            <Ingredient
              label={item.label}
              img={item.img}
              quantity={item.quantity}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.more}>
          <View style={styles.plusContainer}>
            <Pressable android_ripple={{ color: "#d4d4d4" }}>
              <Icon source="plus" size={40} />
            </Pressable>
          </View>
          <Text style={styles.plusTitle}>Add more ingredients</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode="contained"
          labelStyle={styles.btnLabel}
          style={styles.btn}
        >
          Next
        </Button>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default IngredientsScreen;
