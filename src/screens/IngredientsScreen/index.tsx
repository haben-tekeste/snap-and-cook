import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Pressable, Alert } from "react-native";
import {
  Text,
  Button,
  Icon,
  Portal,
  Modal,
  TextInput,
} from "react-native-paper";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useAppSelector } from "../../store";
import { useStyles } from "./style";
import Ingredient from "../../Components/Ingredient";
import { StackParamList } from "../../types/navigation";
import { apiResultsMapper } from "../../utils/api";

type IngredientsScreenRouteProp = RouteProp<
  StackParamList,
  "IngredientsScreen"
>;

// const FormData = global.FormData;

function IngredientsScreen() {
  const [loading, setLoading] = useState(true);
  const { params } = useRoute<IngredientsScreenRouteProp>();
  const { theme } = useAppSelector((state) => state.theme);
  const [modalVisible, setModalVisible] = useState(false);
  const [ingredient, setIngredient] = useState("");
  const [DATA, setDATA] = useState([
    "Cut avocado",
    "Spinach salad",
    "Cherry tomatoes",
    "Hard-boiled egg",
    "Arugula",
    "Chive",
    "White mushrooms",
    "Chili pepper",
  ]);
  // const body = new FormData();
  // const imgData = {
  //   uri: params?.file,
  //   type: mime.getType(params?.file),
  //   name: params.file.split("/").pop(),
  // };
  // body.append("image", imgData);
  // const [getIngredientsFromImage, { isError, isLoading, data, error }] =
  //   useGetIngredientsFromImageMutation();
  // console.log("Data =>  ", apiResultsMapper(params?.data));
  const styles = useStyles(theme);
  // const DATA = [
  //   "Cut avocado",
  //   "Spinach salad",
  //   "Cherry tomatoes",
  //   "Hard-boiled egg",
  //   "Arugula",
  //   "Chive",
  //   "White mushrooms",
  //   "Chili pepper",
  // ];

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const addIngredient = () => {
    if (!DATA.includes(ingredient)) setDATA((prev) => [...prev, ingredient]);
    else Alert.alert("Ingredient already exists");
    setIngredient("");
    setModalVisible(false);
  };
  const removeIngredient = (text: string) => {
    console.log(text);
    if (DATA.includes(text))
      setDATA((prev) => {
        return prev.filter((item) => item !== text);
      });
  };
  // useEffect(() => {
  //   getIngredientsFromImage(body);
  // }, []);

  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);

  // // if (!isLoading) return <Loader />;
  // console.log("result", isError, isLoading, data?.items, error);

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View>
        <Text style={styles.title}>Recognized Ingredients</Text>

        <View style={styles.chipContainer}>
          {DATA?.map((item, i) => (
            <Ingredient label={item} key={i} onPress={removeIngredient} />
          ))}
        </View>
        <Pressable style={styles.more} onPress={showModal}>
          <View style={styles.plusContainer}>
            <Pressable
              onPress={showModal}
              android_ripple={{ color: "#d4d4d4" }}
            >
              <Icon source="plus" size={40} />
            </Pressable>
          </View>
          <Text onPress={showModal} style={styles.plusTitle}>
            Add more ingredients
          </Text>
        </Pressable>
      </View>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <TextInput
            // mode="outlined"
            label="Ingredient"
            value={ingredient}
            onChangeText={(text) => setIngredient(text)}
            style={styles.textInput}
          />
          <View style={{ alignItems: "center" }}>
            <Button
              // mode="contained"
              labelStyle={styles.btnLabel}
              style={styles.ingredientBtn}
              onPress={addIngredient}
            >
              Add
            </Button>
          </View>
        </Modal>
      </Portal>
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
