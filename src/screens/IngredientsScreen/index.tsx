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
import { useAppNavigation, useAppSelector } from "../../store";
import { useStyles } from "./style";
import Ingredient from "@components/Ingredient";
import { StackParamList } from "../../types/navigation";
import { apiResultsMapper } from "@utils/api";

type IngredientsScreenRouteProp = RouteProp<
  StackParamList,
  "IngredientsScreen"
>;

// const FormData = global.FormData;

function IngredientsScreen() {
  const { params } = useRoute<IngredientsScreenRouteProp>();
  const { theme, darkMode } = useAppSelector((state) => state.theme);
  const [modalVisible, setModalVisible] = useState(false);
  const [ingredient, setIngredient] = useState("");
  const [DATA, setDATA] = useState(apiResultsMapper(params?.data) || []);
  const styles = useStyles(theme);
  const { navigate } = useAppNavigation();
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const addIngredient = () => {
    if (!DATA.includes(ingredient)) setDATA((prev) => [...prev, ingredient]);
    else Alert.alert("Ingredient already exists");
    setIngredient("");
    setModalVisible(false);
  };
  const removeIngredient = (text: string) => {
    if (DATA.includes(text))
      setDATA((prev) => {
        return prev.filter((item) => item !== text);
      });
  };
  const handleNavigation = () => {
    if (DATA.length) {
      navigate("RecipeList", {
        data: DATA.join(","),
      });
    }
  };
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
          contentContainerStyle={[
            styles.modal,
            {
              backgroundColor: darkMode
                ? "#3d3c3c"
                : theme.colors.mainBackgroundColor,
            },
          ]}
        >
          <TextInput
            // mode="outlined"
            label="Ingredient"
            value={ingredient}
            onChangeText={(text) => setIngredient(text)}
            style={styles.textInput}
            textColor={theme.colors.mainTextColor}
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
          onPress={handleNavigation}
        >
          Next
        </Button>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default IngredientsScreen;
